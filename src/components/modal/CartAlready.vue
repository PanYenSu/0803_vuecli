<template>
    <div>
        <!-- 已存在購物車提醒 modal -->
        <div class="modal fade bd-example-modal-sm border border-danger"
        id='cartAlready' tabindex="-1" role="dialog">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
            <!-- <div class="modal-header">
                <h5 class="modal-title">很抱歉!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div> -->
            <div class="modal-body">
                <i class="fas fa-exclamation-circle fa-3x" style="color:#F6AC9D"></i>
                <p>此商品已在購物車中.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
