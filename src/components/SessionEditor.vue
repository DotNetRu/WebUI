<template>
  <fieldset>
    <legend>{{index + 1}}.</legend>

    <div class="form-group row">
      <label for="talkId" class="col-sm-2 col-form-label">Идентификатор:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="talkId"/>
      </div>
    </div>

    <div class="form-group row">
      <label for="startTime" class="col-sm-2 col-form-label">Дата и время:</label>
      <div class="col-sm-10 ">
        <div class="form-inline">
          <label class="mx-2" for="startTime" >От:</label>
          <input type="text" class="form-control" required id="startTime"/>
          <label class="mx-2" for="endTime" >До:</label>
          <input type="text" class="form-control" required id="endTime"/>
          <button class="btn btn-dark ml-2" @click="$emit('remove')" :disabled="!isAllowRemove"><i class="fa fa-trash"></i> Удалить сессию</button>
        </div>
      </div>
    </div>

    <fieldset>
      <legend>Спикеры</legend>

      <speaker-editor v-for="(speaker, speakerIndex) of speakers" :key="speakerIndex" v-bind.sync="speaker" :index="speakerIndex"/>

      <div class="form-group row" >
        <div class="col-form-label offset-sm-2 col-sm-10">
          <button class="btn btn-info" @click="addSpeaker()"><i class="fa fa-plus"></i> Еще один спикер</button>
        </div>
      </div>
    </fieldset>

    <div class="form-group row" >
      <label for="talkTitle" class="col-sm-2 col-form-label">Название:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="talkTitle"/>
      </div>
    </div>

    <div class="form-group row" >
      <label for="talkDescription" class="col-sm-2 col-form-label">Описание:</label>
      <div class="col-sm-10">
        <textarea class="form-control" required id="talkDescription"></textarea>
      </div>
    </div>

    <div class="form-group row" >
      <label for="seeAlsoTalkId" class="col-sm-2 col-form-label">Другие части:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="seeAlsoTalkId"/>
      </div>
    </div>

    <div class="form-group row" >
      <label for="CodeUrl" class="col-sm-2 col-form-label">Код:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="CodeUrl"/>
      </div>
    </div>

    <div class="form-group row" >
      <label for="SlidesUrl" class="col-sm-2 col-form-label">Слайды:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="SlidesUrl"/>
      </div>
    </div>

    <div class="form-group row" >
      <label for="VideoUrl" class="col-sm-2 col-form-label">Видео:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" required id="VideoUrl"/>
      </div>
    </div>

  </fieldset>
</template>

<script>
    import SpeakerEditor from './SpeakerEditor'

    export default {
      components: {SpeakerEditor},
      props: {
        index: Number,
        isAllowRemove: Boolean,
        speakers: Array
      },
      name: 'session-editor',
      methods: {
        addSpeaker: function (session) {

          this.$emit('update:speakers', )
          this.speakers.push({isNew: false})
        }
      }
    }
</script>

<style scoped>

</style>
