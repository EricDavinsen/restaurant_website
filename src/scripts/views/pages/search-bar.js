/* eslint-disable no-useless-constructor */
class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div id="search-container" class="search-container">
    <input
      placeholder=" Enter restaurant name"
      id="searchElement"
      type="search"
    />
    <button id="searchButton" type="submit">Search</button>
  </div>
  `;

    this
      .querySelector('#searchButton')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
