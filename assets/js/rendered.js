Template.main.onRendered(function() {});

Template.emulator.onRendered(function() {
  this.emulator = new Emulator({
    scale: 10
  });

  // OUTPUT VIDEO
  this.emulator.setVideoOutput(this.find("#Emulator"));
});

// RENDER MAIN TEMPLATE
Blaze.render(Template.main, document.getElementById('Surface'));
