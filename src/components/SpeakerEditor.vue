<template>
  <fieldset>
    <legend>{{index + 1}}.</legend>

    <div class="form-group row" >
      <label for="speakerId" class="col-sm-2 col-form-label">Спикер:</label>
      <div class="col-sm-10">
        <div class="input-group">
          <input type="text" class="form-control" required id="speakerId"/>
          <div class="input-group-append button" >
            <div class="input-group-text">
              <i v-if="!isNew" title="Новый спикер" class="fa fa-plus-circle" @click="toggleSpeaker()" ></i>
              <i v-if="isNew" title="Уже существующий спикер" class="fa fa-minus-circle" @click="toggleSpeaker()" ></i>
            </div>
          </div>

          <button class="btn btn-dark ml-2" @click="$emit('remove')" v-bind:disabled="!allowRemove"><i class="fa fa-trash"></i> Удалить</button>
        </div>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="companyName" class="col-sm-2 col-form-label">Компания:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="companyName"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="companyUrl" class="col-sm-2 col-form-label">Компания URL:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="companyUrl"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="blogUrl" class="col-sm-2 col-form-label">Blog URL:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="blogUrl"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="contactsUrl" class="col-sm-2 col-form-label">Contacts URL:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="contactsUrl"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="twitterUrl" class="col-sm-2 col-form-label">Twitter URL:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="twitterUrl"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="habrUrl" class="col-sm-2 col-form-label">Habr URL:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="habrUrl"/>
      </div>
    </div>


    <div class="form-group row" v-if="isNew">
      <label for="speakerDescription" class="col-sm-2 col-form-label">Описание:</label>
      <div class="col-sm-10">
        <textarea class="form-control" required id="speakerDescription"></textarea>
      </div>
    </div>

  </fieldset>
</template>

<script>
  export default {
    name: 'speaker-editor',
    props: {
      allowRemove: Boolean,
      isNew: Boolean,
      index: Number
    },
    methods: {
      toggleSpeaker: function () {
        this.$emit('update:isNew', !this.isNew)
      }
    }
  }
</script>

<style scoped>

</style>
