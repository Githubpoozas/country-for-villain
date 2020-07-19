import Vuex from "vuex";
import countries from "~/assets/js/countries";

const checkEvil = () => {
  return new Vuex.Store({
    state: {
      isEvil: undefined,
      goodPoint: 1,
      evilPoint: 1,
      credit: 10000,
      countries: [
        { name: "Afghanistan", code: "AF", wealth: 1000000 },
        { name: "Åland Islands", code: "AX", wealth: 1000000 },
        { name: "Albania", code: "AL", wealth: 1000000 },
        { name: "Algeria", code: "DZ", wealth: 1000000 },
        { name: "American Samoa", code: "AS", wealth: 1000000 },
        { name: "AndorrA", code: "AD", wealth: 1000000 },
        { name: "Angola", code: "AO", wealth: 1000000 },
        { name: "Anguilla", code: "AI", wealth: 1000000 },
        { name: "Antarctica", code: "AQ", wealth: 1000000 },
        { name: "Antigua and Barbuda", code: "AG", wealth: 1000000 },
        { name: "Argentina", code: "AR", wealth: 1000000 },
        { name: "Armenia", code: "AM", wealth: 1000000 },
        { name: "Aruba", code: "AW", wealth: 1000000 },
        { name: "Australia", code: "AU", wealth: 1000000 },
        { name: "Austria", code: "AT", wealth: 1000000 },
        { name: "Azerbaijan", code: "AZ", wealth: 1000000 },
        { name: "Bahamas", code: "BS", wealth: 1000000 },
        { name: "Bahrain", code: "BH", wealth: 1000000 },
        { name: "Bangladesh", code: "BD", wealth: 1000000 },
        { name: "Barbados", code: "BB", wealth: 1000000 },
        { name: "Belarus", code: "BY", wealth: 1000000 },
        { name: "Belgium", code: "BE", wealth: 1000000 },
        { name: "Belize", code: "BZ", wealth: 1000000 },
        { name: "Benin", code: "BJ", wealth: 1000000 },
        { name: "Bermuda", code: "BM", wealth: 1000000 },
        { name: "Bhutan", code: "BT", wealth: 1000000 },
        { name: "Bolivia", code: "BO", wealth: 1000000 },
        { name: "Bosnia and Herzegovina", code: "BA", wealth: 1000000 },
        { name: "Botswana", code: "BW", wealth: 1000000 },
        { name: "Bouvet Island", code: "BV", wealth: 1000000 },
        { name: "Brazil", code: "BR", wealth: 1000000 },
        { name: "British Indian Ocean Territory", code: "IO", wealth: 1000000 },
        { name: "Brunei Darussalam", code: "BN", wealth: 1000000 },
        { name: "Bulgaria", code: "BG", wealth: 1000000 },
        { name: "Burkina Faso", code: "BF", wealth: 1000000 },
        { name: "Burundi", code: "BI", wealth: 1000000 },
        { name: "Cambodia", code: "KH", wealth: 1000000 },
        { name: "Cameroon", code: "CM", wealth: 1000000 },
        { name: "Canada", code: "CA", wealth: 1000000 },
        { name: "Cape Verde", code: "CV", wealth: 1000000 },
        { name: "Cayman Islands", code: "KY", wealth: 1000000 },
        { name: "Central African Republic", code: "CF", wealth: 1000000 },
        { name: "Chad", code: "TD", wealth: 1000000 },
        { name: "Chile", code: "CL", wealth: 1000000 },
        { name: "China", code: "CN", wealth: 1000000 },
        { name: "Christmas Island", code: "CX", wealth: 1000000 },
        { name: "Cocos (Keeling) Islands", code: "CC", wealth: 1000000 },
        { name: "Colombia", code: "CO", wealth: 1000000 },
        { name: "Comoros", code: "KM", wealth: 1000000 },
        { name: "Republic of the Congo", code: "CG,wealth:1000000" },
        {
          name: "Democratic Republic of the Congo",
          code: "CD",
          wealth: 1000000
        },
        { name: "Cook Islands", code: "CK", wealth: 1000000 },
        { name: "Costa Rica", code: "CR", wealth: 1000000 },
        { name: "Cote D'Ivoire", code: "CI", wealth: 1000000 },
        { name: "Croatia", code: "HR", wealth: 1000000 },
        { name: "Cuba", code: "CU", wealth: 1000000 },
        { name: "Cyprus", code: "CY", wealth: 1000000 },
        { name: "Czech Republic", code: "CZ", wealth: 1000000 },
        { name: "Denmark", code: "DK", wealth: 1000000 },
        { name: "Djibouti", code: "DJ", wealth: 1000000 },
        { name: "Dominica", code: "DM", wealth: 1000000 },
        { name: "Dominican Republic", code: "DO", wealth: 1000000 },
        { name: "Ecuador", code: "EC", wealth: 1000000 },
        { name: "Egypt", code: "EG", wealth: 1000000 },
        { name: "El Salvador", code: "SV", wealth: 1000000 },
        { name: "Equatorial Guinea", code: "GQ", wealth: 1000000 },
        { name: "Eritrea", code: "ER", wealth: 1000000 },
        { name: "Estonia", code: "EE", wealth: 1000000 },
        { name: "Ethiopia", code: "ET", wealth: 1000000 },
        { name: "Falkland Islands (Malvinas)", code: "FK", wealth: 1000000 },
        { name: "Faroe Islands", code: "FO", wealth: 1000000 },
        { name: "Fiji", code: "FJ", wealth: 1000000 },
        { name: "Finland", code: "FI", wealth: 1000000 },
        { name: "France", code: "FR", wealth: 1000000 },
        { name: "French Guiana", code: "GF", wealth: 1000000 },
        { name: "French Polynesia", code: "PF", wealth: 1000000 },
        { name: "French Southern Territories", code: "TF", wealth: 1000000 },
        { name: "Gabon", code: "GA", wealth: 1000000 },
        { name: "Gambia", code: "GM", wealth: 1000000 },
        { name: "Georgia", code: "GE", wealth: 1000000 },
        { name: "Germany", code: "DE", wealth: 1000000 },
        { name: "Ghana", code: "GH", wealth: 1000000 },
        { name: "Gibraltar", code: "GI", wealth: 1000000 },
        { name: "Greece", code: "GR", wealth: 1000000 },
        { name: "Greenland", code: "GL", wealth: 1000000 },
        { name: "Grenada", code: "GD", wealth: 1000000 },
        { name: "Guadeloupe", code: "GP", wealth: 1000000 },
        { name: "Guam", code: "GU", wealth: 1000000 },
        { name: "Guatemala", code: "GT", wealth: 1000000 },
        { name: "Guernsey", code: "GG", wealth: 1000000 },
        { name: "Guinea", code: "GN", wealth: 1000000 },
        { name: "Guinea-Bissau", code: "GW", wealth: 1000000 },
        { name: "Guyana", code: "GY", wealth: 1000000 },
        { name: "Haiti", code: "HT", wealth: 1000000 },
        {
          name: "Heard Island and Mcdonald Islands",
          code: "HM",
          wealth: 1000000
        },
        { name: "Holy See (Vatican City State)", code: "VA", wealth: 1000000 },
        { name: "Honduras", code: "HN", wealth: 1000000 },
        { name: "Hong Kong", code: "HK", wealth: 1000000 },
        { name: "Hungary", code: "HU", wealth: 1000000 },
        { name: "Iceland", code: "IS", wealth: 1000000 },
        { name: "India", code: "IN", wealth: 1000000 },
        { name: "Indonesia", code: "ID", wealth: 1000000 },
        { name: "Iran", code: "IR", wealth: 1000000 },
        { name: "Iraq", code: "IQ", wealth: 1000000 },
        { name: "Ireland", code: "IE", wealth: 1000000 },
        { name: "Isle of Man", code: "IM", wealth: 1000000 },
        { name: "Israel", code: "IL", wealth: 1000000 },
        { name: "Italy", code: "IT", wealth: 1000000 },
        { name: "Jamaica", code: "JM", wealth: 1000000 },
        { name: "Japan", code: "JP", wealth: 1000000 },
        { name: "Jersey", code: "JE", wealth: 1000000 },
        { name: "Jordan", code: "JO", wealth: 1000000 },
        { name: "Kazakhstan", code: "KZ", wealth: 1000000 },
        { name: "Kenya", code: "KE", wealth: 1000000 },
        { name: "Kiribati", code: "KI", wealth: 1000000 },
        { name: "North Korea", code: "KP", wealth: 1000000 },
        { name: "South Korea", code: "KR", wealth: 1000000 },
        { name: "Kuwait", code: "KW", wealth: 1000000 },
        { name: "Kyrgyzstan", code: "KG", wealth: 1000000 },
        { name: "Lao", code: "LA", wealth: 1000000 },
        { name: "Latvia", code: "LV", wealth: 1000000 },
        { name: "Lebanon", code: "LB", wealth: 1000000 },
        { name: "Lesotho", code: "LS", wealth: 1000000 },
        { name: "Liberia", code: "LR", wealth: 1000000 },
        { name: "Libyan Arab Jamahiriya", code: "LY", wealth: 1000000 },
        { name: "Liechtenstein", code: "LI", wealth: 1000000 },
        { name: "Lithuania", code: "LT", wealth: 1000000 },
        { name: "Luxembourg", code: "LU", wealth: 1000000 },
        { name: "Macao", code: "MO", wealth: 1000000 },
        { name: "Macedonia", code: "MK", wealth: 1000000 },
        { name: "Madagascar", code: "MG", wealth: 1000000 },
        { name: "Malawi", code: "MW", wealth: 1000000 },
        { name: "Malaysia", code: "MY", wealth: 1000000 },
        { name: "Maldives", code: "MV", wealth: 1000000 },
        { name: "Mali", code: "ML", wealth: 1000000 },
        { name: "Malta", code: "MT", wealth: 1000000 },
        { name: "Marshall Islands", code: "MH", wealth: 1000000 },
        { name: "Martinique", code: "MQ", wealth: 1000000 },
        { name: "Mauritania", code: "MR", wealth: 1000000 },
        { name: "Mauritius", code: "MU", wealth: 1000000 },
        { name: "Mayotte", code: "YT", wealth: 1000000 },
        { name: "Mexico", code: "MX", wealth: 1000000 },
        { name: "Micronesia", code: "FM", wealth: 1000000 },
        { name: "Moldova", code: "MD", wealth: 1000000 },
        { name: "Monaco", code: "MC", wealth: 1000000 },
        { name: "Mongolia", code: "MN", wealth: 1000000 },
        { name: "Montenegro", code: "ME", wealth: 1000000 },
        { name: "Montserrat", code: "MS", wealth: 1000000 },
        { name: "Morocco", code: "MA", wealth: 1000000 },
        { name: "Mozambique", code: "MZ", wealth: 1000000 },
        { name: "Myanmar", code: "MM", wealth: 1000000 },
        { name: "Namibia", code: "NA", wealth: 1000000 },
        { name: "Nauru", code: "NR", wealth: 1000000 },
        { name: "Nepal", code: "NP", wealth: 1000000 },
        { name: "Netherlands", code: "NL", wealth: 1000000 },
        { name: "Netherlands Antilles", code: "AN", wealth: 1000000 },
        { name: "New Caledonia", code: "NC", wealth: 1000000 },
        { name: "New Zealand", code: "NZ", wealth: 1000000 },
        { name: "Nicaragua", code: "NI", wealth: 1000000 },
        { name: "Niger", code: "NE", wealth: 1000000 },
        { name: "Nigeria", code: "NG", wealth: 1000000 },
        { name: "Niue", code: "NU", wealth: 1000000 },
        { name: "Norfolk Island", code: "NF", wealth: 1000000 },
        { name: "Northern Mariana Islands", code: "MP", wealth: 1000000 },
        { name: "Norway", code: "NO", wealth: 1000000 },
        { name: "Oman", code: "OM", wealth: 1000000 },
        { name: "Pakistan", code: "PK", wealth: 1000000 },
        { name: "Palau", code: "PW", wealth: 1000000 },
        { name: "Palestinian Territory", code: "PS,wealth:1000000" },
        { name: "Panama", code: "PA", wealth: 1000000 },
        { name: "Papua New Guinea", code: "PG", wealth: 1000000 },
        { name: "Paraguay", code: "PY", wealth: 1000000 },
        { name: "Peru", code: "PE", wealth: 1000000 },
        { name: "Philippines", code: "PH", wealth: 1000000 },
        { name: "Pitcairn", code: "PN", wealth: 1000000 },
        { name: "Poland", code: "PL", wealth: 1000000 },
        { name: "Portugal", code: "PT", wealth: 1000000 },
        { name: "Puerto Rico", code: "PR", wealth: 1000000 },
        { name: "Qatar", code: "QA", wealth: 1000000 },
        { name: "Reunion", code: "RE", wealth: 1000000 },
        { name: "Romania", code: "RO", wealth: 1000000 },
        { name: "Russian Federation", code: "RU", wealth: 1000000 },
        { name: "RWANDA", code: "RW", wealth: 1000000 },
        { name: "Saint Helena", code: "SH", wealth: 1000000 },
        { name: "Saint Kitts and Nevis", code: "KN,wealth:1000000" },
        { name: "Saint Lucia", code: "LC", wealth: 1000000 },
        { name: "Saint Pierre and Miquelon", code: "PM", wealth: 1000000 },
        {
          name: "Saint Vincent and the Grenadines",
          code: "VC",
          wealth: 1000000
        },
        { name: "Samoa", code: "WS", wealth: 1000000 },
        { name: "San Marino", code: "SM", wealth: 1000000 },
        { name: "Sao Tome and Principe", code: "ST,wealth:1000000" },
        { name: "Saudi Arabia", code: "SA", wealth: 1000000 },
        { name: "Senegal", code: "SN", wealth: 1000000 },
        { name: "Serbia", code: "RS", wealth: 1000000 },
        { name: "Seychelles", code: "SC", wealth: 1000000 },
        { name: "Sierra Leone", code: "SL", wealth: 1000000 },
        { name: "Singapore", code: "SG", wealth: 1000000 },
        { name: "Slovakia", code: "SK", wealth: 1000000 },
        { name: "Slovenia", code: "SI", wealth: 1000000 },
        { name: "Solomon Islands", code: "SB", wealth: 1000000 },
        { name: "Somalia", code: "SO", wealth: 1000000 },
        { name: "South Africa", code: "ZA", wealth: 1000000 },
        {
          name: "South Georgia and the South Sandwich Islands",
          code: "GS",
          wealth: 1000000
        },
        { name: "Spain", code: "ES", wealth: 1000000 },
        { name: "Sri Lanka", code: "LK", wealth: 1000000 },
        { name: "Sudan", code: "SD", wealth: 1000000 },
        { name: "Suriname", code: "SR", wealth: 1000000 },
        { name: "Svalbard and Jan Mayen", code: "SJ", wealth: 1000000 },
        { name: "Swaziland", code: "SZ", wealth: 1000000 },
        { name: "Sweden", code: "SE", wealth: 1000000 },
        { name: "Switzerland", code: "CH", wealth: 1000000 },
        { name: "Syrian Arab Republic", code: "SY", wealth: 1000000 },
        { name: "Taiwan, Province of China", code: "TW", wealth: 1000000 },
        { name: "Tajikistan", code: "TJ", wealth: 1000000 },
        { name: "Tanzania", code: "TZ", wealth: 1000000 },
        { name: "Thailand", code: "TH", wealth: 1000000 },
        { name: "Timor-Leste", code: "TL", wealth: 1000000 },
        { name: "Togo", code: "TG", wealth: 1000000 },
        { name: "Tokelau", code: "TK", wealth: 1000000 },
        { name: "Tonga", code: "TO", wealth: 1000000 },
        { name: "Trinidad and Tobago", code: "TT", wealth: 1000000 },
        { name: "Tunisia", code: "TN", wealth: 1000000 },
        { name: "Turkey", code: "TR", wealth: 1000000 },
        { name: "Turkmenistan", code: "TM", wealth: 1000000 },
        { name: "Turks and Caicos Islands", code: "TC", wealth: 1000000 },
        { name: "Tuvalu", code: "TV", wealth: 1000000 },
        { name: "Uganda", code: "UG", wealth: 1000000 },
        { name: "Ukraine", code: "UA", wealth: 1000000 },
        { name: "United Arab Emirates", code: "AE", wealth: 1000000 },
        { name: "United Kingdom", code: "GB", wealth: 1000000 },
        { name: "United States", code: "US", wealth: 1000000 },
        {
          name: "United States Minor Outlying Islands",
          code: "UM",
          wealth: 1000000
        },
        { name: "Uruguay", code: "UY", wealth: 1000000 },
        { name: "Uzbekistan", code: "UZ", wealth: 1000000 },
        { name: "Vanuatu", code: "VU", wealth: 1000000 },
        { name: "Venezuela", code: "VE", wealth: 1000000 },
        { name: "Viet Nam", code: "VN", wealth: 1000000 },
        { name: "Virgin Islands, British", code: "VG", wealth: 1000000 },
        { name: "Virgin Islands, U.S.", code: "VI", wealth: 1000000 },
        { name: "Wallis and Futuna", code: "WF", wealth: 1000000 },
        { name: "Western Sahara", code: "EH", wealth: 1000000 },
        { name: "Yemen", code: "YE", wealth: 1000000 },
        { name: "Zambia", code: "ZM", wealth: 1000000 },
        { name: "Zimbabwe", code: "ZW", wealth: 1000000 }
      ]
    },
    mutations: {
      SWITCH_MUTATION(state) {
        state.isEvil = !state.isEvil;
      },
      GOOD_MUTATION(state) {
        state.isEvil = false;
      },
      EVIL_MUTATION(state) {
        state.isEvil = true;
      },
      WEALTH_MUTATION(state, [countryCode, amount]) {
        let countryIndex = this.state.countries.findIndex(
          country => country.code === countryCode
        );
        state.countries[countryIndex]["wealth"] += amount;
        let newGoodPoint = Math.floor(amount / 10000);
        if (newGoodPoint <= 0) return;
        state.goodPoint += newGoodPoint;
      }
    },
    actions: {
      switchAction({ state, commit }) {
        commit("SWITCH_MUTATION");
      },
      goodAction({ state, commit }) {
        commit("GOOD_MUTATION");
      },
      evilAction({ state, commit }) {
        commit("EVIL_MUTATION");
      },
      wealthAction({ state, commit }, payload) {
        commit("WEALTH_MUTATION", payload);
      }
    },
    getters: {
      getIsEvil(state) {
        return state.isEvil;
      },
      getGoodPoint(state) {
        return state.goodPoint;
      },
      getEvilPoint(state) {
        return state.evilPoint;
      },
      getTotalPoint(state) {
        return state.totalPoint;
      },
      getCredit(state) {
        return state.credit;
      },
      getCountries(state) {
        return state.countries;
      }
    }
  });
};

export default checkEvil;
