class Autogrow {
  /**
   * Attach event handler to all textareas matched by the selector
   * @param {string} selector
   */
  constructor(selector = "textarea") {
    let list = document.querySelectorAll(selector);
    for (let i = 0; i < list.length; i++) {
      var el = list[i];
      el.addEventListener("input", (event) => {
        this.autoExpand(event.target);
      });
    }
  }

  /**
   * Auto expand a field to fit its content
   * @param {HTMLTextAreaElement} field
   */
  autoExpand(field) {
    // reset height
    field.style.height = "inherit";

    // get computed styles
    let computed = window.getComputedStyle(field);

    // get scroll + border height
    let height = parseInt(computed.getPropertyValue("border-top-width"), 10) + field.scrollHeight + parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    // update height
    field.style.height = height + "px";
  }
}

export default Autogrow;
