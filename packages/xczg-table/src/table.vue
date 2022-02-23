<template>
  <div class="xczg-table">
    <table :class="{'Noborder':borderNot}">
      <tbody>
        <tr class="multi_conter" v-for="(item, index) in multiline" :key="index+'multilne'" :style="{height: multihei>0?`${multihei}`+'px':''}">
          <div class="row">
           <div class="row_item" v-for="(clo, colindex) in item" :key="colindex*2+'col'" >
             <th :style="thStyle">
               <div>
                 {{clo[title]}}
               </div>
             </th>
             <td @click="delicent(clo, $event)" :style="tdStyle">
               <div>
                 {{clo[conter]}}
               </div>
             </td>
           </div>
          </div>
        </tr>
        <tr class="alone_conter" v-for="(item, index) in aloneline" :key="index*3+'alone'" :style="{height: alonehei>0?`${alonehei}`+'px':''}">
           <div class="row">
             <div class="row_item">
              <th :style="alThStyle||thStyle">
                <div>{{item[title]}}</div>
              </th>
              <td @click="delicent(item, $event)" :style="alTdStyle||tdStyle">
                <div>
                 {{item[conter]}}
                </div>
              </td>
             </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'XczgTable',
    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },
      diff: {
        type: String,
        default: ''
      },
      colnum: {
        type: Number || [Number],
        default: 2 || [Number]
      },
      multidata: {
        type: Array,
        default: function() {
          return [];
        }
      },
      alonedata: {
        type: Array,
        default: function() {
          return [];
        }
      },
      title: {
        type: String,
        default: ''
      },
      conter: {
        type: String,
        default: ''
      },
      multihei: {
        type: Number,
        default: 42
      },
      alonehei: {
        type: Number,
        default: 60
      },
      borderNot: Boolean,
      thStyle: Object,
      tdStyle: Object,
      alThStyle: Object,
      alTdStyle: Object
    },
    data() {
      return {
        tabledata: this.data,
        multilist: this.multidata,
        alonelist: this.alonedata,
        colnump: Number,
        absol: this.diff
      };
    },
    created() {
      this.colnump = this.colnum > 0 ? this.colnum : 1;
      console.log(this.thstyle);
    },
    computed: {
      multiline() {
        let multiNum = Number;
        let i = 0;
        let multiline = [];
        let multinew = [];
        if (this.multilist && this.multilist.length > 0) {
          multiline = this.multilist;
        } else {
          this.tabledata.forEach(item => {
            if (!item[this.absol]) {
              multiline.push(item);
            };
          });
        }
        multiNum = Math.ceil(multiline.length / this.colnump);
        while (i < multiNum) {
          multinew.push(multiline.slice(i * this.colnump, (i + 1) * this.colnump));
          i++ ;
        };
        return multinew;
      },
      aloneline() {
        if (this.alonelist && this.alonelist.length > 0) {
          return this.alonelist;
        } else {
          let aloneline = [];
          this.tabledata.forEach(item => {
            if (item[this.absol]) {
              aloneline.push(item);
            };
          });
          return aloneline;
        }
      }
    },
    methods: {
      delicent(item, e) {
        this.$emit('clickDet', item);
      }
    }
  };
</script>
