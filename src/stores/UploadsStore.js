import {observable, action, computed} from 'mobx'

class UploadsStore {
  @observable uploads_list = []

  @action add_upload_item(item) {
    this.uploads_list = [...this.uploads_list, item]
  }

  @action clear() {
    this.uploads_list = []
  }

  @action change_status(name, status) {
    const index = this.uploads_list.findIndex((e) => e.name === name)
    if (index !== -1) {
      let copy_item = JSON.parse(JSON.stringify(this.uploads_list[index]))
      copy_item.status = status
      this.uploads_list[index] = copy_item
    }
  }

  @action delete(name) {
    this.uploads_list = this.uploads_list.filter((upload) => upload.name !== name)
  }
}

const store = new UploadsStore()
export default store
