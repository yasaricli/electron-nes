Template.emulator.events({
  'click button': function(event, instance) {
    instance.$('#file').trigger('click');
  },

  'change #file': function(event, instance) {
    var file = _.first(event.currentTarget.files);


    // LOAD NES FILE
    instance.emulator.loadCartridge(file).then(function() {

      // START GAME
      instance.emulator.start();
    });
  }
});
