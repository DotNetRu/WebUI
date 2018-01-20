<template>
  <div class="container-fluid">
    <h2>Добавляем встречу</h2>
    <div class="row">
      <div class="col-sm-9">

        <meetup-general-editor v-if="state==0"></meetup-general-editor>

        <div v-for="(session, index) of sessions">
          <session-editor v-bind="sessions" v-if="index + 1 == state && talk"/>
        </div>

      </div>
      <div class="col-sm-2">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link "
               v-bind:class="{active: state == 0}"
               @click="state=0">Общая информация</a>
          </li>

          <template v-for="(session, index) of sessions">
            <li class="nav-item"><a href="#" class="nav-link "
                                    v-bind:class="{active: state == index+1 && talk}"
                                    @click="selectTalk(index)">Доклад {{index + 1}}</a></li>
            <li class="nav-item"><a href="#" class="nav-link "
                                    v-bind:class="{active: state == index+1 && !talk}"
                                    @click="selectSpeaker(index)">Спикеры</a></li>
          </template>

          <li class="nav-item"><a href="#" class="nav-link " @click="addSession()"><i class="fa fa-plus"></i> Добавить доклад</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
    import SessionEditor from './SessionEditor'
    import MeetupGeneralEditor from './MeetupGeneralEditor'

    export default {
      components: {
        MeetupGeneralEditor,
        SessionEditor
      },
      name: 'editor',
      data: function () {
        return {
          state: 0,
          talk: true,
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
        selectTalk: function (index) {
          this.state = index + 1
          this.talk = true
        },
        selectSpeaker: function (index) {
          this.state = index + 1
          this.talk = false
        },
        addFriend: function () {
          this.friends.push({ isNew: false })
        },
        removeFriend: function (friend) {
          let index = this.friends.indexOf(friend)
          this.friends.splice(index, 1)
        },
        addSession: function () {
          this.state = this.sessions.push({speakers: [{isNew: false}]})
          this.talk = true
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
