<template>
  <div ref="delModal" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header  bg-primary">
        <h5 class="modal-title text-white fw-bold">刪除訂單</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定要刪除此訂單?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-primary"
         @click="$emit('delete-order', order.id)">刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['order'],
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.delModal);
  },
};
</script>
