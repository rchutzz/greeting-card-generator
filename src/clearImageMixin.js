export const clearImageMixin = {
    methods: {
        clearImage: function() {
            if (this.imageName !== '') {
                this.imageName = 'beach.jpeg'
            }
        }
    }
}