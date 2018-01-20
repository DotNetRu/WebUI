<template>
  <div class="form-group row">
    <label v-bind:for="id" class="col-sm-2 col-form-label">{{label}}:</label>
    <div class="col-sm-10">
      <input v-if="type != 'textarea'"
             v-bind:type="type" class="form-control"
             v-bind="$attrs"
             v-bind:id="id"
             v-bind:value="value"
             @input="$emit('input', $event.target.value)"/>

      <textarea v-if="type == 'textarea'"
             v-bind:type="type" class="form-control"
             v-bind="$attrs"
             v-bind:id="id"
             v-bind:value="value"
             @input="$emit('input', $event.target.value)"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'input-component',
    props: {
      value: String,
      type: {
        type: String,
        default: 'text'
      },
      label: String
    },
    data: function () {
      return {
        id: ''
      }
    },
    mounted () {
      this.id = this._uid
    }
  }
</script>
