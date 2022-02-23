## xczg Table 表格


### 多列表格 单条数据

:::demo 一条数据 `:data`接收一维数组 `[{},{},{},{}]`<br/> 分别多列和单列   `[{多列},{多列},{单列 absol:true}]` `:diff:"'absol'"`   `String`类型 <br/> 多列个数  `:colnum="2"` 每列两条数据  `Number` 类型 <br/>`:title="'titleeee'"` 键值为 titleeee 为表头 `String` 类型<br/>`:title="'contereee'"` 键值为 contereee 为内容 `String` 类型

```html
  <template>
    <xczg-table
      :data="tableData"
      :diff="'absol'"
      :colnum="2"
      :title="'titleeee'"
      :conter="'contereee'">
    </xczg-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [
            {
              titleeee: '任务编号',
              contereee: '20220217002',
            },
            {
              titleeee: '事件类别',
              contereee: '类别1'
            },
            {
              titleeee: '事件子类',
              contereee: '类别2'
            },
            {
              titleeee: '三级类别',
              contereee: '类别3'
            },
            {
              titleeee: '三级类别',
              contereee: '类别3'
            },
            {
              titleeee: '上班人',
              contereee: '陈.'
            },
            {
              titleeee: '事件描述',
              absol: 'ture',
              contereee: '滨海新区大港街霞光路74号忆水阁洗浴整天整夜发出澡音（像是水泵的声音），晚上特别吵闹，根本无法入睡。家里有中考考生，严重影响学习和休息！目前离中考已不到100天，急盼解决！！！'
            },
            {
              titleeee: '事件描述2',
              absol: 'ture',
              contereee: '滨海新区大港街霞光路74号忆水阁洗浴整天整夜发出澡音（像是水泵的声音），晚上特别吵闹，根本无法入睡。家里有中考考生，严重影响学习和休息！目前离中考已不到100天，急盼解决！！！'
            }
          ]
        }
      },

    }
  </script>
```
:::

### 多列数据,单列数据

:::demo `:multidata`多列数据 `[{},{},{}]` ; `:alonedata`单列数据`[{},{},{}]`<br/>`clickDet`点击内容事件,接受的参数是内容数据`键名`:`键值`
```html
  <template>
    <xczg-table
      :multidata="multidata"
      :alonedata="alonedata"
      @clickDet="test"
      :title="'titleeee'"
      :conter="'contereee'"
      :colnum="2"
      >
    </xczg-table>
  </template>

  <script>
    export default {
      data() {
        return {
          multidata: [
            {
              id:1,
              titleeee: '任务编号1',
              contereee: '20220217002'
            },
            {
              id:2,
              titleeee: '事件类别1',
              contereee: '类别1'
            },
            {
              id:3,
              titleeee: '事件子类1',
              contereee: '类别2'
            },
            {
              id:4,
              titleeee: '三级类别1',
              contereee: '类别3'
            },
            {
              id:5,
              titleeee: '三级类别1',
              contereee: '类别3'
            },
            {
              id:6,
              titleeee: '上班人1',
              contereee: '陈.'
            }
          ],
          alonedata: [
            {
              id:7,
              titleeee: '事件描述1',
              contereee: '滨海新区大港街霞光路74号忆水阁洗浴整天整夜发出澡音（像是水泵的声音），晚上特别吵闹，根本无法入睡。家里有中考考生，严重影响学习和休息！目前离中考已不到100天，急盼解决！！！'
            }
          ]
        }
      },
      methods: {
        test(e){
          console.log(e)
        }
      }
    }
  </script>
```
:::

### 样式

:::demo `multihei`多列行高  `Number` 类型;`alonehei`单列行高  `Number` 类型;<br/>默认带外边框 `borderNot` 取消外边框<br/> `thStyle`,`tdStyle`设置th表头,td单元格样式,`alThStyle`,`alTdStyle`可以覆盖单列样式 `Object`
```html
  <template>
    <xczg-table
      :multihei="60"
      :alonehei="80"
      borderNot
      :thStyle=thStyle
      :tdStyle=tdStyle
      :alThStyle=alThStyle
      :alTdStyle=alTdStyle
      style="width: 80%"

      :colnum="2"
      :title="'titleeee'"
      :conter="'contereee'"
      :alonedata="alonedata"
      :multidata="multidata"
      >
    </xczg-table>
  </template>

  <script>
    export default {
      data() {
        return {
          thStyle:{
            background:'#ECF5FF',
            color:'#909399',
            width:'150px',
            fontSize: '14px',
            fontWeight: '500'
          },
          tdStyle:{
            background:'#fff',
            color:'#409EFF',
            fontSize: '14px'
          },
          alThStyle:{
            color:'#909399',
            width:'150px',
          },
          alTdStyle:{
            color:'#909399',
          },
          multidata: [
            {
              titleeee: '任务编号1',
              contereee: '20220217002'
            },
            {
              titleeee: '事件类别1',
              contereee: '类别1'
            },
            {
              titleeee: '事件子类1',
              contereee: '类别2'
            }
          ],
          alonedata: [
            {
              titleeee: '事件描述1',
              contereee: '滨海新区大港街霞光路74号忆水阁洗浴整天整夜发出澡音（像是水泵的声音），晚上特别吵闹，根本无法入睡。家里有中考考生，严重影响学习和休息！目前离中考已不到100天，急盼解决！！！'
            },
             {
              titleeee: '事件描述1',
              contereee: '滨海新区大港街霞光路74号忆水阁洗浴整天整夜发出澡音（像是水泵的声音），晚上特别吵闹，根本无法入睡。家里有中考考生，严重影响学习和休息！目前离中考已不到100天，急盼解决！！！'
            }
          ]
        }
      }
    }
  </script>
```
:::

