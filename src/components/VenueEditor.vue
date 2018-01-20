<template>
  <div>
    <div class="form-group row" >
      <label for="venueId" class="col-sm-2 col-form-label">Идентификатор:</label>
      <div class="col-sm-10">
        <div class="input-group">
          <input type="text" class="form-control" required id="venueId"
                 :value="id" @input="$emit('update:id', $event.target.value)"/>
          <div class="input-group-append button">
            <div class="input-group-text">
              <i  v-if="!isNew" title="Новая площадка" class="fa fa-plus-circle" @click="toggleVenue()" ></i>
              <i  v-if="isNew" title="Уже существующая площадка" class="fa fa-minus-circle" @click="toggleVenue()" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="venueName" class="col-sm-2 col-form-label">Название:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="venueName"
               :value="name" @input="$emit('update:name', $event.target.value)"
               />
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="venueAddress" class="col-sm-2 col-form-label">Адрес:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="venueAddress"
               :value="address" @input="$emit('update:address', $event.target.value)"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="mapUrl" class="col-sm-2 col-form-label">Карта:</label>
      <div class="col-sm-10">
        <input type="url" class="form-control" required id="mapUrl"
               :value="mapUrl" @input="$emit('update:mapUrl', $event.target.value)"
               pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'venue-editor',
    props: {
      isNew: Boolean,
      id: String,
      name: String,
      address: String,
      mapUrl: String
    },
    methods: {
      toggleVenue: function () {
        this.$emit('update:isNew', !this.isNew)
      }
    }
  }
</script>

<style scoped>

</style>
