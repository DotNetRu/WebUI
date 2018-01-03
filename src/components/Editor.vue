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
      <div class="form-group row">
        <label class="offset-sm-2 col-sm-10  col-form-label">Площадка:</label>
      </div>

      <div class="form-group row" >
        <label for="venueId" class="col-sm-2 col-form-label">Идентификатор:</label>
        <div class="col-sm-10">
          <div class="input-group">
            <input type="text" class="form-control" required id="venueId"/>
            <div class="input-group-append" v-if="!newVenue">
              <div class="input-group-text"><i title="Новая площадка" class="fa fa-plus-circle" @click="addVenue()" ></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group row" v-if="newVenue">
        <label for="venueName" class="col-sm-2 col-form-label">Название:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" required id="venueName"/>
        </div>
      </div>

      <div class="form-group row" v-if="newVenue">
        <label for="venueAddress" class="col-sm-2 col-form-label">Адрес:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" required id="venueAddress"/>
        </div>
      </div>

      <div class="form-group row" v-if="newVenue">
        <label for="mapUrl" class="col-sm-2 col-form-label">Карта:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" required id="mapUrl"/>
        </div>
      </div>


    </fieldset>


    <fieldset class="form-group">
      <div class="form-group row">
        <label class="offset-sm-2 col-sm-10  col-form-label">Друзья:</label>
      </div>
    </fieldset>
  </div>
</template>

<script>
    export default {
      name: 'editor',
      data: function () {
        return {newVenue: false}
      },
      methods: {
        addVenue: function () {
          this.newVenue = !this.newVenue
        }
      }
    }
</script>

<style scoped>

</style>
