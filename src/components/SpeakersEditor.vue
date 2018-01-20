<template>
  <fieldset>
    <legend>Спикеры</legend>

    <speaker-editor v-for="(speaker, speakerIndex) of speakers" :key="speakerIndex" v-bind.sync="speaker" :index="speakerIndex"/>

    <div class="form-group row" >
      <div class="col-form-label offset-sm-2 col-sm-10">
        <button class="btn btn-info" @click="addSpeaker()"><i class="fa fa-plus"></i> Еще один спикер</button>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
    export default {
        name: "speakers-editor"
    }
</script>

<style scoped>

</style>
