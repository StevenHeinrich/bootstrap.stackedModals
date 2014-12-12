(function ($) {
  'use strict';

  var modalOverrides = {
    hideModal: function () {
      var that = this;
      this.$element.hide();
      this.backdrop(function () {
        if(!$('.modal.in').length) {
          that.$body.removeClass('modal-open');
          that.resetScrollbar();
        }
        that.$element.trigger('hidden.bs.modal');
      });
    }
  };

  $.extend(true, $.fn.modal.Constructor.prototype, modalOverrides);
})(jQuery);
