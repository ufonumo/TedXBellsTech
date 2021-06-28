jQuery(document).ready(function () {
    jQuery(".container-wrap").append(
        "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
    );
}); 

var exampleCallback = function() {
  console.log('Order complete!');
};

window.EBWidgets.createWidget({
  widgetType: 'checkout',
  eventId: '161143238765',
  modal: true,
  modalTriggerElementId: 'eventbrite-widget-modal-trigger-161143238765',
  onOrderComplete: exampleCallback
});

AOS.init();