<template>
  <fieldset>
    <legend >{{index + 1}}.</legend>

    <div class="form-group row" >
      <label for="friendId" class="col-sm-2 col-form-label">Идентификатор:</label>
      <div class="col-sm-10">
        <div class="input-group">
          <input type="text" class="form-control" required id="friendId"
                 :value="id" @input="$emit('update:id', $event.target.value)"/>
          <div class="input-group-append button" >
            <div class="input-group-text">
              <i v-if="!isNew" title="Новый друг" class="fa fa-plus-circle" @click="toggleFriend()" ></i>
              <i v-if="isNew" title="Уже существующий друг" class="fa fa-minus-circle" @click="toggleFriend()" ></i>
            </div>
          </div>

          <button class="btn btn-dark ml-2" @click="removeFriend()" v-bind:disabled="!allowRemove"><i class="fa fa-trash"></i> Удалить</button>
        </div>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="friendName" class="col-sm-2 col-form-label">Имя:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="friendName"
               :value="name" @input="$emit('update:name', $event.target.value)"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="friendAddress" class="col-sm-2 col-form-label">Адрес (Url):</label>
      <div class="col-sm-10">
        <input type="url" class="form-control" required id="friendAddress"
               :value="address" @input="$emit('update:address', $event.target.value)"
               pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"/>
      </div>
    </div>

    <div class="form-group row" v-if="isNew">
      <label for="description" class="col-sm-2 col-form-label" >Описание:</label>
      <div class="col-sm-10">
        <textarea class="form-control" required id="description"
                  :value="description" @input="$emit('update:description', $event.target.value)">
        </textarea>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
  import Vue from "vue";

  const FrienEditor = Vue.extend({
    name: 'friend-editor',
    props: {
      allowRemove: Boolean,
      isNew: Boolean,
      index: Number,
      id: String,
      name: String,
      address: String,
      description: String
    },
    methods: {
      toggleFriend: function () {
        this.$emit('update:isNew', !this.isNew)
      },
      removeFriend: function () {
        this.$emit('remove')
      }
    }
  });
</script>

<style scoped>

</style>
