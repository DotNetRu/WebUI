<template>
  <div>

    <input-component label="Идентификатор" v-model="talkId" required />

    <div class="form-group row">
      <label for="startTime" class="col-sm-2 col-form-label">Дата и время:</label>
      <div class="col-sm-10 ">
        <div class="form-inline">
          <label class="mx-2" for="startTime" >От:</label>
          <input type="text" class="form-control" required id="startTime"/>
          <label class="mx-2" for="endTime" >До:</label>
          <input type="text" class="form-control" required id="endTime"/>
        </div>
      </div>
    </div>

    <input-component label="Название" v-model="talkTitle" required />

    <input-component label="Описание" v-model="talkDescription" required type="textarea"/>

    <div class="form-group row" v-for="seeAlso of seeAlsoTalkIdsComputed">
      <label for="seeAlsoTalkId" class="col-sm-2 col-form-label">Другие части:</label>
      <div class="col-sm-10">
        <div class="input-group">
          <input type="text" class="form-control" id="seeAlsoTalkId" v-model="seeAlso.value"/>
          <div class="input-group-append button" v-if="seeAlso.value">
            <div class="input-group-text">
              <i title="Удалить ссылку" class="fa fa-remove-circle" @click="removeSeeAlso(seeAlso)" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>


    <input-component type="url" label="Код" v-model="codeUrl" />
    <input-component type="url" label="Слайды" v-model="slidesUrl" />
    <input-component type="url" label="Видео" v-model="videoUrl" />

  </div>
</template>

<script lang="ts">
  import Vue from "vue";
    import SpeakerEditor from './SpeakerEditor'
    import InputComponent from './InputComponent'

    const SessionEditor = Vue.extend({
      components: {
        InputComponent,
        SpeakerEditor},
      props: {
        value: Object,

        isAllowRemove: Boolean,
        speakers: Array,
        talkId: String,
        talkTitle: String,
        talkDescription: String,
        seeAlsoTalkIds: {
          type: Array,
          default: function () {
            return []
          }
        }
      },
      computed: {
        seeAlsoTalkIdsComputed: function (): string[] {
          let values = [...this.seeAlsoTalkIds]
          values.push({value: ''})
          return values
        }
      },
      name: 'session-editor',
      methods: {
        addSpeaker: function () {
          let newSpeakers = [...this.speakers]
          newSpeakers.push({isNew: false})
          this.$emit('update:speakers', newSpeakers)
        },
        removeSeeAlso: function (seeAlso: string) {
        }
      }
    });

    export default SessionEditor;
</script>

<style scoped>

</style>
