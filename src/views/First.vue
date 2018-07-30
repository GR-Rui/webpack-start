<template>
  <div class="swipe-wrapper">
    <cube-scroll>
      <cube-swipe>
        <transition-group name="swipe" tag="ul">
          <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
            <cube-swipe-item
                ref="swipeItem"
                :btns="data.btns"
                :index="index"
                @btn-click="onBtnClick"
                @active="onItemActive">
              <div @click="onItemClick(data.item, index)" class="item-inner">
                <div class="icon">
                  <img width="60" height="60" :src="data.item.imgurl">
                </div>
                <div class="text">
                  <h2 class="item-name" v-html="data.item.name"></h2>
                  <p class="item-desc" v-html="data.item.desc"></p>
                </div>
              </div>
            </cube-swipe-item>
          </li>
        </transition-group>
      </cube-swipe>
    </cube-scroll>
  </div>
</template>

<script>
   export default {
  data() {
    return {
      swipeData: [
        {
          item: {
            id: '3646653877',
            name: '还不是因为你长得不好看',
            desc: '伤感：歌词再狠，也抵不过现实伤人',
            imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
        {
          item: {
            id: '1789676645',
            name: '秋水浮萍任飘渺',
            desc: '『武侠配乐』快意恩仇江湖情',
            imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
        {
          item: {
            id: '3649034125',
            name: '念葳蕊',
            desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
            imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        },
      ]
    }
  },
  created() {
    this.activeIndex = -1
  },
  methods: {
    onItemClick(item) {
      console.log('click item:', item)
    },
    onBtnClick(btn, index) {
      if (btn.action === 'delete') {
        this.$createActionSheet({
          title: '确认要删除吗',
          active: 0,
          data: [
            {content: '删除'}
          ],
          onSelect: () => {
            this.swipeData.splice(index, 1)
          }
        }).show()
      } else {
        this.$refs.swipeItem[index].shrink()
      }
    },
    onItemActive(index) {
      if (index === this.activeIndex) {
        return
      }
      if (this.activeIndex !== -1) {
        const activeItem = this.$refs.swipeItem[this.activeIndex]
        activeItem.shrink()
      }
      this.activeIndex = index
    }
  }
}

</script>