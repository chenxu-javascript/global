<template>
  <div :class="[isTextarea ? 'maxtextArea' : 'maxinput']" ref="maxlenConent" class="maxlen-conent">
    <slot></slot>
    <span v-if="maxlength" class="z-maxlen-counter-text" :class="[isTextarea ? 'textarea-counter' : 'vertical-center']">
      {{inputed}}/{{maxlength}}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxlength: 0,
      inputed: 0,
      isTextarea: false,
    }
  },
  mounted() {
    let $textarea = this.$refs.maxlenConent.getElementsByTagName('textarea')[0];
    let $input = this.$refs.maxlenConent.getElementsByTagName('input')[0];
    $input = $input || $textarea
    let self = this;
    if ($input) {
      let maxlength = $input.getAttribute('maxlength');
      if (maxlength) {
        this.maxlength = maxlength;
        this.$input = $input;
        this.isTextarea = !!$textarea;
        this.inputChanged = function () {
          self.inputed = this.value.length;
        };
        $input.addEventListener('input', this.inputChanged);
        $input.addEventListener('focus', this.inputChanged);
      }
      var myEvent = new Event('input');
      $input.dispatchEvent(myEvent);
    }
  },
  destroyed() {
    if (this.inputChanged && this.$input) {
      this.$input.removeEventListener('input', this.inputChanged);
      this.$input.removeEventListener('focus', this.inputChanged);
    }
  }
}
</script>
<style lang="less">
.maxlen-conent {
  position: relative;
  input[type='text'],
  textarea {
    padding-right: 55px;
  }
}

.z-maxlen-counter-text {
  position: absolute;
  right: 10px;
  display: inline-block;
  z-index: 1;
  color: #999999;
  font-size: 12px;
  bottom: 0;

  &.textarea-counter {
    line-height: 1.5;
    bottom: 5px;
  }
}
</style>


