Template.main.onRendered(function() {});

Template.emulator.onRendered(function() {
  this.emulator = new Emulator({
    videoOutput: this.find("#Game"),
    speed: 0.75
  });
});

// RENDER MAIN TEMPLATES
Blaze.render(Template.main, document.getElementById('Surface'));
