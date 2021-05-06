class AutogrowTextarea extends HTMLTextAreaElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.addEventListener("input", (event) => {
      // reset first, otherwise it won't shrink properly
      this.style.height = "inherit";

      // get computed styles
      let computed = window.getComputedStyle(this);

      // get scroll + border height
      let height = parseInt(computed.getPropertyValue("border-top-width"), 10) + this.scrollHeight + parseInt(computed.getPropertyValue("border-bottom-width"), 10);

      this.style.height = height + "px";
    });
  }
}

customElements.define("autogrow-textarea", AutogrowTextarea, { extends: "textarea" });
