export default {
  top: 0,
  left: 0,
  image: "",
  visible: false,

  show(image: string, event: MouseEvent) {
    this.image = image;
    this.visible = true;
    this.updatePosition(event);
  },

  move(event: MouseEvent) {
    if (!this.visible) return;
    this.updatePosition(event);
  },

  hide() {
    this.visible = false;
  },

  updatePosition(event: MouseEvent) {
    const offset = 24;
    const { innerWidth, innerHeight } = window;
    const width = 260;
    const height = 220;
    let left = event.clientX + offset;
    let top = event.clientY + offset;

    if (left + width > innerWidth) {
      left = event.clientX - width - offset;
    }

    if (top + height > innerHeight) {
      top = event.clientY - height - offset;
    }

    this.left = left;
    this.top = top;
  },
};
