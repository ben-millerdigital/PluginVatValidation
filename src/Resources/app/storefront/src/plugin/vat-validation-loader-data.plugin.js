import { checkVAT, countries } from "jsvat";
import Plugin from "src/plugin-system/plugin.class";
import StoreApiClient from "src/service/store-api-client.service";
import ElementLoadingIndicatorUtil from "src/utility/loading-indicator/element-loading-indicator.util";
import { titleCase } from "./helper/typography.helper";

export default class VatValidationLoaderDataPlugin extends Plugin {
  static options = {
    companyVatIdSelector: "#vatIds",
    companyNameSelector: "#billingAddresscompany",
    companyAddressSelector: "#billingAddressAddressStreet",
    companyZipcodeSelector: "#billingAddressAddressZipcode",
    companyCitySelector: "#billingAddressAddressCity",
    companyCountrySelector: "#billingAddressAddressCountry",
  };

  init() {
    this._client = new StoreApiClient();
    this.$companyVatId = this.el.querySelector(
      this.options.companyVatIdSelector
    );
    this.$companyName = this.el.querySelector(this.options.companyNameSelector);
    this.$companyAddress = this.el.querySelector(
      this.options.companyAddressSelector
    );
    this.$companyZipcode = this.el.querySelector(
      this.options.companyZipcodeSelector
    );
    this.$companyCity = this.el.querySelector(this.options.companyCitySelector);
    this.$companyCountry = this.el.querySelector(
      this.options.companyCountrySelector
    );

    this._registerEvents();
  }

  _registerEvents() {
    this.$companyVatId.addEventListener("change", this._onChange.bind(this));
  }

  _onChange(event) {
    const field = event.target;
    const value = field.value.trim();
    const { isValid, country } = checkVAT(value, countries);

    if (isValid) {
      this._resetAllCompanyRegistrationValues();
      this._fetchData(value);
      this._setSelectOption(this.$companyCountry, country.name);
      /* behe 25-04-22 ugly hack TODO */
      $('.country-select').keyup();
    }
  }

  _fetchData(vatId) {
    ElementLoadingIndicatorUtil.create(this.$companyVatId.parentNode);

    this._client.get(`store-api/company/${vatId}`, this._handleData.bind(this));
  }

  _handleData(response, request) {
    ElementLoadingIndicatorUtil.remove(this.$companyVatId.parentNode);

    if (request.status >= 400) {
      throw new Error(`Failed to parse vat validation info from VIES response`);
    }

    this._parseData(response);
  }

  _parseData(response) {
    const { traderName, traderAddress } = JSON.parse(response);
    const formattedTraderAddress = traderAddress.replace("\n", ", ");
    const [address, address2, zipCode, city] = formattedTraderAddress.match(
      /\w+/g
    );

    this._setInputValue(this.$companyName, traderName);
    this._setInputValue(this.$companyAddress, address + ' ' + address2, true);
    this._setInputValue(this.$companyZipcode, zipCode);
    this._setInputValue(this.$companyCity, city, true);
  }

  _resetAllCompanyRegistrationValues() {
    const elements = [
      this.$companyName,
      this.$companyAddress,
      this.$companyZipcode,
      this.$companyCity,
      this.$companyCountry,
    ];

    elements.forEach((element) => {
      switch (element.tagName) {
        case "INPUT": {
          this._resetInputValue(element);
          break;
        }

        case "SELECT": {
          this._resetSelectOption(element);
          break;
        }
      }
    });
  }

  _setSelectOption(element, text) {
    for (let i = 0; i < element.options.length; ++i) {
      if (element.options[i].text === text) {
        element.options[i].selected = true;
      }
    }
  }

  _setInputValue(element, value, isTitleCase = false) {
    element.value = isTitleCase ? titleCase(value) : value;
  }

  _resetSelectOption(element) {
    element.options[0].selected = true;
  }

  _resetInputValue(element) {
    element.value = "";
  }
}
