export default class Slide {
  container;
  elements;
  controls;
  time;

  constructor(
    container: Element,
    elements: Element[],
    controls: Element,
    time = 5000
  ) {
    this.container = container;
    this.elements = elements;
    this.controls = controls;
    this.time = time;

    console.log({
      container: this.container,
      elements: this.elements,
      controls: this.controls,
      time: this.time,
    });
  }
}
