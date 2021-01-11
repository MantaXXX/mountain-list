(function () {
  const list = Vue.createApp({
    data() {
      return {
        newItem: '',
        type: '',
        categories: {
          clothes: [
            { content: "外套", completed: false, type: 'clothes' },
          ],
          equipment: [

          ],
          electronic: [
            { content: "手機", completed: false, type: 'electronic' },
          ],
          food: [
            { content: "水", completed: false, type: 'food' },
          ],
        },
      }
    },
    methods: {
      // 新增項目
      addItem: function () {
        if (this.newItem && this.type) {
          switch (this.type) {
            case 'clothes':
              this.categories.clothes.push({ content: this.newItem, completed: false, type: this.type })
              break;
            case 'equipment':
              this.categories.equipment.push({ content: this.newItem, completed: false, type: this.type })
              break;
            case 'electronic':
              this.categories.electronic.push({ content: this.newItem, completed: false, type: this.type })
              break;
            case 'food':
              this.categories.food.push({ content: this.newItem, completed: false, type: this.type })
              break;
          }
        } else alert('上山準備要周全，表格確實填寫齁！')
        // 清空填寫項目
        this.newItem = ''
        this.type = ''
      },
      // 刪除項目
      removeItem: function (item) {
        for (let type in this.categories) {
          if (type === item.type) {
            this.categories[type].splice(this.categories[type].indexOf(item), 1)
          }
        }
      },
    }
  }).mount('#list')

  const map = Vue.createApp({
    data() {
      return {
        map: null,
        center: { lat: 23.471966848273222, lng: 120.95676817445897 }
      }
    },
    created() {
      // 當元件建立且初始化完成，瀏覽器載入時，加載地圖
      window.addEventListener('load', () => {
        this.initMap()
        this.setMarker()
      })
    },
    methods: {
      // 建立地圖
      initMap() {
        // 透過 map 物件建構子建立新 map 物件實例，並綁定在 google-map 元素上
        this.map = new window.google.maps.Map(document.querySelector('.google-map'), {
          center: this.center,
          zoom: 10,
          maxZoom: 20,
          minZoom: 3,
          streetViewControl: false,
          mayTypeControl: false,
        })
      },
      setMarker() {
        // 建立一個新標記
        const marker = new google.maps.Marker({
          position: this.center,
          // 自訂標記圖案
          icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            // 標記大小
            scale: 3,
          },
          map: this.map,
        })
      }
    }
  }).mount('#map')

})()