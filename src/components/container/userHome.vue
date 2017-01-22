<template>
  <div>
    <input type="file" @change="upload()" name="image" id="image" accept="image/*" />
    <button @click="fuck"></button>

    <form id="form1" method="post" enctype="multipart/form-data" action="http://localhost:8282/api/file/upload">
      <div>
        <div id="files">
          <input type="text" name="name"/>
          <input type="file" name="file"/>
        </div>
        <input type="submit" />
      </div>
    </form>


  </div>
</template>
<script>
  import store from '../../stores/TestStore.js'
  export default {
    methods: {
      upload () {
        this.$http({
          method:'POST',
          url:'http://localhost:8282/api/file/test',
          data:{
            name: 'hahahah',
            file: document.getElementById('image').files[0]
          },
          headers: {"Content-Type": "multipart/form-data"},
          emulateJSON: true
        }).then( (res) => {
           console.log(JSON.stringify(res));
        })





      },
      fuck () {
        this.$http.get('http://localhost:8282/api/getMongoConfig',{
        }).then((res) => {
           console.log(JSON.stringify(res));
        }, (err) => {
           console.log(err.message);
        });
      }
    }
  }
</script>
