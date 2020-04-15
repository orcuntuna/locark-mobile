import { observable, action, computed } from 'mobx'

class UploadsStore {
  @observable uploads_list = []
  @action add_upload_item(item) {
    this.uploads_list = [...this.uploads_list, item]
  }
  @action clear() {
    this.uploads_list = []
  }
}

const store = new UploadsStore()
export default store
