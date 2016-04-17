Template.emulator.onCreated(function() {
  this.emulator = new Emulator({
    speed: 0.75
  });
});

Template.emulator.onRendered(function() {

  // SET VIDEO OUTPUT
  this.emulator.setVideoOutput(this.find("#Game"));

  // SET VIDE SCALE
  this.emulator.setVideoScale(2);
});


// RENDER MAIN TEMPLATES
Blaze.render(Template.main, document.getElementById('Surface'));
