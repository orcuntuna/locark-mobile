import {observable, action, computed} from 'mobx'

class UploadsStore {
  @observable uploads_list = []

  @action add_upload_item(item) {
    this.uploads_list = [...this.uploads_list, item]
  }

  @action clear() {
    this.uploads_list = []
  }

  @action change_status(name) {
    this.uploads_list.forEach((file, index) => {
      if (file.name === name) {
        this.uploads_list[index].status = 1;
      }
    })
  }
}

const store = new UploadsStore()
export default store
