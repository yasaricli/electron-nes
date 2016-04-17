Template.emulator.events({
  'click .open'(event, instance) {
    instance.$('#file').click();
  },

  'click .play'(event, instance) {
    instance.emulator.start();
  },

  'click .pause'(event, instance) {
    instance.emulator.stop();
  },

  'click .reset'(event, instance) {
    instance.emulator.softReset();
  },

  'click .sound'(event, instance) {
    if (instance.emulator.isAudioEnabled()) {
      return instance.emulator.setAudioEnabled(false);
    }
    return instance.emulator.setAudioEnabled(true);
  },

  'change #file'(event, instance) {
    var file = _.first(event.currentTarget.files);


    // LOAD NES FILE
    instance.emulator.loadCartridge(file).then(function() {

      // START GAME
      instance.emulator.start();
    });
  }
});
