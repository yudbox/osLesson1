

let initialState = {
    catalog: [
        { id: 1, name: 'Samsung Galaxy A40', photo: 'https://i2.rozetka.ua/goods/11262216/prestigio_psp5524duoblackblue_images_11262216828.jpg', price: '4500', description: 'Экран (5.9", Super AMOLED, 2340х1080)/ Samsung Exynos 7904 (2x1.8 ГГц + 6x1.6 ГГц)/ двойная основная камера: 16 Мп + 5 Мп, фронтальная камера: 25 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 3100 мА*ч', quantity: '3' },
        { id: 2, name: 'Meizu C9 Pro 3/32GB', photo: 'https://i2.rozetka.ua/goods/13957076/meizu_c9_pro_3_32gb_black_images_13957076818.jpg', price: '5000', description: 'Экран (5.45", IGZO, 1440x720)/ Spreadtrum SC9832E (1.3 ГГц)/ основная камера: 13 Мп, фронтальная камера: 13 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD (до 128 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.0 (Oreo) / 3000 мА*ч', quantity: '7' },
        { id: 3, name: 'Huawei P30 Lite 4/64GB Midnight Black', photo: 'https://i2.rozetka.ua/goods/15585287/copy_huawei_p30_lite_4_128gb_black_5dea1d33858b8_images_15585287768.jpg', price: '7000', description: 'Экран (6.15", LTPS, 2312x1080)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 24 Мп + 8 Мп + 2 Мп, фронтальная камера: 32 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (EMUI 9.0.1)/ 3340 мА*ч', quantity: '15' },
]
};

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

//export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE_BODY, newMessageBody })

export default goodsReducer;