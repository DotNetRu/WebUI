<template>
  <div>
    <div class="form-group row">
      <label for="community" class="col-sm-2 col-form-label">Сообщество:</label>
      <div class="col-sm-10">
        <select class="form-control" id="community" required>
          <option>KryDotNet</option>
          <option>MskDotNet</option>
          <option>SarDotNet</option>
          <option>SpbDotNet</option>
        </select>
      </div>
    </div>

    <input-component v-model="meetupId" label="Идентификатор" required/>

    <fieldset class="form-group">
      <legend>Площадка:</legend>

      <venue-editor v-bind.sync="venue"/>
    </fieldset>


    <fieldset class="form-group">
      <legend>Друзья:</legend>

      <friend-editor v-for="(friend, index) of friends"
                     :key="index"
                     v-bind.sync="friend"
                     :allowRemove="!denyRemoveFriend"
                     :index="index"
                     @remove="removeFriend(friend)"
      />

      <div class="form-group row" >
        <div class="col-form-label offset-sm-2 col-sm-10">
          <button class="btn btn-info" @click="addFriend()"><i class="fa fa-plus"></i> Еще один друг</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
  import FriendEditor from './FriendEditor'
  import VenueEditor from './VenueEditor'
  import InputComponent from './InputComponent'

  export default {
    name: 'meetup-general-editor',
    data: function () {
      return {
        meetupId: '',
        friends: [],
        venue: {}
      }
    },
    components: {
      InputComponent,
      VenueEditor,
      FriendEditor
    }
  }
</script>

<style scoped>

</style>
