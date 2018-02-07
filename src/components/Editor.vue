<template>
  <div class="container-fluid">
    <h2>Добавляем встречу</h2>
    <div class="row">
      <div class="col-sm-9">

        <meetup-general-editor v-if="state==0" v-model="meetup"></meetup-general-editor>

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

          <template v-for="(session, index) of meetup.sessions">
            <li class="nav-item"><a href="#" class="nav-link "
                                    v-bind:class="{active: state == index+1 && talk}"
                                    @click="selectTalk(index)">Доклад {{index + 1}}</a></li>
            <li class="nav-item"><a href="#" class="nav-link "
                                    v-bind:class="{active: state == index+1 && !talk}"
                                    @click="selectSpeaker(index)">Спикеры</a></li>
          </template>

          <li class="nav-item">
            <a href="#" class="nav-link " @click="addSession()">
              <i class="fa fa-plus"></i> Добавить доклад
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import SessionEditor from './SessionEditor'
    import MeetupGeneralEditor from './MeetupGeneralEditor'
    import {IMeetup} from "./models/meetup";

    const Editor = Vue.extend({
      components: {
        MeetupGeneralEditor,
        SessionEditor
      },
      name: 'editor',
      data: function () {
        let meetup : IMeetup = {
          communityId: '',
          friendIds: [],
          id: '',
          venueId: '',
          newVenue: null,
          sessions: []
        };

        return {
          state: 0,
          talk: true,
          meetup: meetup
        }
      },
      computed: {
        denyRemoveFriend: function() : boolean {
          return false;
        },
        denyRemoveSession: function() : boolean {
          return false;
        }
      },
      methods: {
        selectTalk: function (index: number) {
          this.state = index + 1
          this.talk = true
        },
        selectSpeaker: function (index: number) {
          this.state = index + 1
          this.talk = false
        },
        addFriend: function () {
        },
        removeFriend: function () {
        },
        addSession: function () {
        }
      }
    });

    export default Editor;
</script>

<style lang="scss">


</style>
