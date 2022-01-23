import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
export const TableMixin = {
  data () {
    return {
      alert: {
        clear: true
      },
      selectedRowKeys: [],
      selectedRows: [],
      queryParam: {},
      // file-upload
      headers: {
        Authorization: 'Bearer ' + Vue.ls.get(ACCESS_TOKEN)
      }
    }
  },
  methods: {
    handlerquery (e) {
      this.queryParam = { ...e }
      this.queryPage()
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleSubmit (e) {
      e.preventDefault()
      this.queryPage()
    },
    queryPage (bool = false) {
      this.$refs.table.refresh(bool)
    },
    showData (record) {
      this.$refs.modalForm.init(record.id, 'show')
    },
    editData (record) {
      this.$refs.modalForm.init(record.id, 'edit')
    },
    addData () {
      this.$refs.modalForm.init('', 'add')
    }
  }
}
