<template>
  <div class="container">
    <h2>Добавляем встречу</h2>

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

    <div class="form-group row">
      <label for="meetupId" class="col-sm-2 col-form-label">Идентификатор:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="meetupId"/>
      </div>
    </div>

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

    <fieldset class="form-group">
      <legend>Сессии:</legend>

      <session-editor v-for="(session, index) in sessions"
                      v-bind.sync="session"
                      :key="index"/>

      <div class="form-group row" >
        <div class="col-form-label offset-sm-2 col-sm-10">
          <button class="btn btn-info" @click="addSession()"><i class="fa fa-plus"></i> Еще одина сессия</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
    import FriendEditor from './FriendEditor'
    import VenueEditor from './VenueEditor'
    import SessionEditor from './SessionEditor'

    export default {
      components: {
        SessionEditor,
        VenueEditor,
        FriendEditor
      },
      name: 'editor',
      data: function () {
        return {
          venue: {
            isNew: false,
            id: '',
            name: '',
            address: '',
            mapUrl: '',
            description: ''
          },
          friends: [{
            isNew: false,
            id: '',
            name: '',
            address: '',
            description: ''
          }],
          sessions: [{
            speakers: [{isNew: false}]
          }]
        }
      },
      computed: {
        denyRemoveFriend: function () {
          return this.friends.length <= 1
        },
        denyRemoveSession: function () {
          return this.sessions.length <= 1
        }
      },
      methods: {

        addFriend: function () {
          this.friends.push({ isNew: false })
        },
        removeFriend: function (friend) {
          let index = this.friends.indexOf(friend)
          this.friends.splice(index, 1)
        },
        addSession: function () {
          this.sessions.push({speakers: [{isNew: false}]})
        },
        removeSession: function (session) {
          let index = this.sessions.indexOf(session)
          this.sessions.splice(index, 1)
        },
        removeSpeaker: function (speaker, session) {
          let index = session.speakers.indexOf(speaker)
          session.speakers.splice(index, 1)
        }
      }
    }
</script>

<style lang="scss">


</style>
