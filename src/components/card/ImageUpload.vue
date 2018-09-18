<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload Image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile" @click="addTip">
      </div>
      <progress value="0" max="100" id="progress"></progress>
      <br>
      <img id="image">
      <button type="button" id="setImageButton" style="display:none" @click="setImage">Set Image</button>
      <div>
        {{ proTip }}
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    data: function() {
      return {
        file: '',
        proTip: ''
      }
    },
    methods: {
      addTip: function() {
        this.proTip = 'After setting the image, drag picture to reposition!'
      },
      uploadFile: function(event) {

        document.getElementById('setImageButton').style.display = 'none';
        
        this.file = event.target.files[0];
        let storageRef = Firebase.storage().ref('user_uploads/' + this.file.name);
        var upload = storageRef.put(this.file);

        // create thumbnail 
        var reader = new FileReader();
        reader.readAsDataURL(this.file);

        reader.onload = function(e) {
          document.getElementById('image').src = e.target.result;
        }

        // progress bar
        upload.on('state_changed', function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('progress').value = progress;

          // once we successfully uploaded our picture, we change our set image button display property to 'inline-block' to make it visible
          if (progress === 100) {
            document.getElementById('setImageButton').style.display = 'inline-block';
          }
        })
      },
      setImage: function() {
        this.$emit('displayImageChanged', this.file.name);
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 200px;
  }
    progress {
        width: 50%;
        background: green;
    }
    progress[value]::-webkit-progress-value {
        background-image: -webkit-linear-gradient(-45deg,
        transparent 33%, rgba(0, 0, 0, .1) 33%,
        rgba(0, 0, 0, .1) 66%, transparent 66%),
        -webkit-linear-gradient(top,
        rgba(255, 255, 255, .25),
        rgba(0, 0, 0, .25)),
        -webkit-linear-gradient(left, rgb(204, 184, 0), rgb(84, 255, 68));

        border-radius: 2px;
        background-size: 35px 20px,
        100% 100%,
        100% 100%;
    }
</style>