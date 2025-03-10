export const appSchemaDemo01 = {
  dataSource: {
    list: [
      {
        id: 132,
        name: 'getAllComponent',
        data: {
          data: [],
          type: 'array'
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-06-28T06:26:26.000Z',
        updated_at: '2022-06-28T07:02:30.000Z'
      },
      {
        id: 133,
        name: 'getAllList',
        data: {
          columns: [
            {
              name: 'test',
              title: '测试',
              field: 'test',
              type: 'string',
              format: {}
            },
            {
              name: 'test1',
              title: '测试1',
              field: 'test1',
              type: 'string',
              format: {}
            }
          ],
          type: 'array',
          data: [
            {
              test: 'test1',
              test1: 'test1',
              _id: '341efc48'
            },
            {
              test: 'test2',
              test1: 'test1',
              _id: 'b86b516c'
            },
            {
              test: 'test3',
              test1: 'test1',
              _id: 'f680cd78'
            }
          ],
          options: {
            uri: '',
            method: 'GET'
          },
          dataHandler: {
            type: 'JSFunction',
            value: 'function dataHandler(data) { \n return data \n}'
          },
          willFetch: {
            type: 'JSFunction',
            value: 'function willFetch(option) {\n  return option \n}'
          },
          shouldFetch: {
            type: 'JSFunction',
            value: 'function shouldFetch(option) {\n  return true \n}'
          },
          errorHandler: {
            type: 'JSFunction',
            value: 'function errorHandler(err) {}'
          }
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-06-28T07:32:16.000Z',
        updated_at: '2023-01-19T03:29:11.000Z'
      },
      {
        id: 135,
        name: 'getAllMaterialList',
        data: {
          columns: [
            {
              name: 'id',
              title: 'id',
              field: 'id',
              type: 'string',
              format: {}
            },
            {
              name: 'name',
              title: 'name',
              field: 'name',
              type: 'string',
              format: {}
            },
            {
              name: 'framework',
              title: 'framework',
              field: 'framework',
              type: 'string',
              format: {
                required: true
              }
            },
            {
              name: 'components',
              title: 'components',
              field: 'components',
              type: 'string',
              format: {}
            },
            {
              name: 'content',
              title: 'content',
              field: 'content',
              type: 'string',
              format: {}
            },
            {
              name: 'url',
              title: 'url',
              field: 'url',
              type: 'string',
              format: {}
            },
            {
              name: 'published_at',
              title: 'published_at',
              field: 'published_at',
              type: 'string',
              format: {}
            },
            {
              name: 'created_at',
              title: 'created_at',
              field: 'created_at',
              type: 'string',
              format: {}
            },
            {
              name: 'updated_at',
              title: 'updated_at',
              field: 'updated_at',
              type: 'string',
              format: {}
            },
            {
              name: 'published',
              title: 'published',
              field: 'published',
              type: 'string',
              format: {}
            },
            {
              name: 'last_build_info',
              title: 'last_build_info',
              field: 'last_build_info',
              type: 'string',
              format: {}
            },
            {
              name: 'tenant',
              title: 'tenant',
              field: 'tenant',
              type: 'string',
              format: {}
            },
            {
              name: 'version',
              title: 'version',
              field: 'version',
              type: 'string',
              format: {}
            },
            {
              name: 'description',
              title: 'description',
              field: 'description',
              type: 'string',
              format: {}
            }
          ],
          type: 'array',
          data: [
            {
              id: 'f37123ec',
              url: '',
              name: 'ng-material',
              tenant: '',
              content: '',
              version: '1.0.0',
              framework: 'Angular',
              published: '',
              components: '',
              created_at: '2021-11-02T11:32:22.000Z',
              updated_at: '2021-11-02T11:32:22.000Z',
              description: 'angular组件库物料',
              published_at: '2021-11-02T11:32:22.000Z',
              last_build_info: '',
              _id: '2a23e653'
            },
            {
              id: 'f37123ec',
              url: '',
              name: 'ng-material',
              tenant: '',
              content: '',
              version: '1.0.0',
              framework: 'Angular',
              published: '',
              components: '',
              created_at: '2021-11-02T11:32:22.000Z',
              updated_at: '2021-11-02T11:32:22.000Z',
              description: 'angular组件库物料',
              published_at: '2021-11-02T11:32:22.000Z',
              last_build_info: '',
              _id: '06b253be'
            },
            {
              id: 'f37123ec',
              url: '',
              name: 'ng-material',
              tenant: '',
              content: '',
              version: '1.0.0',
              framework: 'Angular',
              published: '',
              components: '',
              created_at: '2021-11-02T11:32:22.000Z',
              updated_at: '2021-11-02T11:32:22.000Z',
              description: 'angular组件库物料',
              published_at: '2021-11-02T11:32:22.000Z',
              last_build_info: '',
              _id: 'c55a41ed'
            },
            {
              id: 'f37123ec',
              url: '',
              name: 'ng-material',
              tenant: '',
              content: '',
              version: '1.0.0',
              framework: 'Angular',
              published: '',
              components: '',
              created_at: '2021-11-02T11:32:22.000Z',
              updated_at: '2021-11-02T11:32:22.000Z',
              description: 'angular组件库物料',
              published_at: '2021-11-02T11:32:22.000Z',
              last_build_info: '',
              _id: 'f37123ec'
            },
            {
              id: '7a63c1a2',
              url: '',
              name: 'tiny-vue',
              tenant: '',
              content: 'Tiny Vue物料',
              version: '1.0.0',
              framework: 'Vue',
              published: '',
              components: '',
              created_at: '',
              updated_at: '',
              description: 'Tiny Vue物料',
              published_at: '',
              last_build_info: '',
              _id: '7a63c1a2'
            }
          ],
          options: {
            uri: '',
            method: 'GET'
          },
          willFetch: {
            type: 'JSFunction',
            value: 'function willFetch(option) {\n  return option \n}'
          },
          dataHandler: {
            type: 'JSFunction',
            value: 'function dataHandler(data) { \n return data \n}'
          },
          shouldFetch: {
            type: 'JSFunction',
            value: 'function shouldFetch(option) {\n  return true \n}'
          },
          errorHandler: {
            type: 'JSFunction',
            value: 'function errorHandler(err) {}'
          }
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-06-29T00:57:50.000Z',
        updated_at: '2023-05-15T02:37:12.000Z'
      },
      {
        id: 139,
        name: 'treedata',
        data: {
          data: [
            {
              label: 'level111',
              value: '111',
              id: 'f6609643',
              pid: '',
              _RID: 'row_4'
            },
            {
              label: 'level1-son',
              value: '111-1',
              id: 'af1f937f',
              pid: 'f6609643',
              _RID: 'row_5'
            },
            {
              label: 'level222',
              value: '222',
              id: '28e3709c',
              pid: '',
              _RID: 'row_6'
            },
            {
              label: 'level2-son',
              value: '222-1',
              id: '6b571bef',
              pid: '28e3709c',
              _RID: 'row_5'
            },
            {
              id: '6317c2cc',
              pid: 'fdfa',
              label: 'fsdfaa',
              value: 'fsadf',
              _RID: 'row_6'
            },
            {
              id: '9cce369f',
              pid: 'test',
              label: 'test1',
              value: '001'
            }
          ],
          type: 'tree'
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-06-30T06:13:57.000Z',
        updated_at: '2022-07-29T03:14:55.000Z'
      },
      {
        id: 150,
        name: 'componentList',
        data: {
          data: [
            {
              _RID: 'row_1',
              name: '表单',
              isSelected: 'true',
              description: '由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据'
            },
            {
              name: '按钮',
              isSelected: 'false',
              description: '常用的操作按钮，提供包括默认按钮、图标按钮、图片按钮、下拉按钮等类型'
            },
            {
              id: '490f8a00',
              _RID: 'row_3',
              name: '表单项',
              framework: '',
              materials: '',
              description: 'Form 组件下的 FormItem 配置'
            },
            {
              id: 'c259b8b3',
              _RID: 'row_4',
              name: '开关',
              framework: '',
              materials: '',
              description: '关闭或打开'
            },
            {
              id: '083ed9c7',
              _RID: 'row_5',
              name: '互斥按钮组',
              framework: '',
              materials: '',
              description: '以按钮组的方式出现，常用于多项类似操作'
            },
            {
              id: '09136cea',
              _RID: 'row_6',
              name: '提示框',
              framework: '',
              materials: '',
              description: 'Popover可通过对一个触发源操作触发弹出框,支持自定义弹出内容，延迟触发和渐变动画'
            },
            {
              id: 'a63b57d5',
              _RID: 'row_7',
              name: '文字提示框',
              framework: '',
              materials: '',
              description:
                '动态显示提示信息，一般通过鼠标事件进行响应；提供 warning、error、info、success 四种类型显示不同类别的信'
            },
            {
              id: 'a0f6e8a3',
              _RID: 'row_8',
              name: '树',
              framework: '',
              materials: '',
              description:
                '可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单'
            },
            {
              id: 'd1aa18fc',
              _RID: 'row_9',
              name: '分页',
              framework: '',
              materials: '',
              description: '当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件'
            },
            {
              id: 'ca49cc52',
              _RID: 'row_10',
              name: '表格',
              framework: '',
              materials: '',
              description: '提供了非常强大数据表格功能，可以展示数据列表，可以对数据列表进行选择、编辑等'
            },
            {
              id: '4e20ecc9',
              name: '搜索框',
              framework: '',
              materials: '',
              description: '指定条件对象进行搜索数据'
            },
            {
              id: '6b093ee5',
              name: '折叠面板',
              framework: '',
              materials: '',
              description: '内容区可指定动态页面或自定义 html 等，支持展开收起操作'
            },
            {
              id: '0a09abc0',
              name: '对话框',
              framework: '',
              materials: '',
              description: '模态对话框，在浮层中显示，引导用户进行相关操作'
            },
            {
              id: 'f814b901',
              name: '标签页签项',
              framework: '',
              materials: '',
              description: 'tab页签'
            },
            {
              id: 'c5ae797c',
              name: '单选',
              framework: '',
              materials: '',
              description: '用于配置不同场景的选项，在一组备选项中进行单选'
            },
            {
              id: '33d0c590',
              _RID: 'row_13',
              name: '弹出编辑',
              framework: '',
              materials: '',
              description:
                '该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件'
            },
            {
              id: '16711dfa',
              _RID: 'row_14',
              name: '下拉框',
              framework: '',
              materials: '',
              description: 'Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件'
            },
            {
              id: 'a9fd190a',
              _RID: 'row_15',
              name: '折叠面板项',
              framework: '',
              materials: '',
              description: '内容区可指定动态页面或自定义 html 等，支持展开收起操作'
            },
            {
              id: 'a7dfa9ec',
              _RID: 'row_16',
              name: '复选框',
              framework: '',
              materials: '',
              description: '用于配置不同场景的选项，提供用户可在一组选项中进行多选'
            },
            {
              id: 'd4bb8330',
              name: '输入框',
              framework: '',
              materials: '',
              description: '通过鼠标或键盘输入字符'
            },
            {
              id: 'ced3dc83',
              name: '时间线',
              framework: '',
              materials: '',
              description: '时间线'
            }
          ],
          type: 'array',
          columns: [
            {
              name: 'name',
              type: 'string',
              field: 'name',
              title: 'name',
              format: {
                max: 0,
                min: 0,
                dateTime: false,
                required: false,
                stringType: ''
              }
            },
            {
              name: 'description',
              type: 'string',
              field: 'description',
              title: 'description',
              format: {
                max: 0,
                min: 0,
                dateTime: false,
                required: false,
                stringType: ''
              }
            },
            {
              name: 'isSelected',
              type: 'string',
              field: 'isSelected',
              title: 'isSelected',
              format: {
                max: 0,
                min: 0,
                dateTime: false,
                required: false,
                stringType: ''
              }
            }
          ],
          options: {
            uri: 'http://localhost:9090/assets/json/bundle.json',
            method: 'GET'
          },
          willFetch: {
            type: 'JSFunction',
            value: 'function willFetch(option) {\n  return option \n}'
          },
          dataHandler: {
            type: 'JSFunction',
            value: 'function dataHandler(data) { \n return data \n}'
          },
          shouldFetch: {
            type: 'JSFunction',
            value: 'function shouldFetch(option) {\n  return true \n}'
          },
          errorHandler: {
            type: 'JSFunction',
            value: 'function errorHandler(err) {}'
          }
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-07-04T02:20:07.000Z',
        updated_at: '2022-07-04T06:25:29.000Z'
      },
      {
        id: 151,
        name: 'selectedComponents',
        data: {
          columns: [
            {
              name: 'name',
              title: 'name',
              field: 'name',
              type: 'string',
              format: {
                required: false,
                stringType: '',
                min: 0,
                max: 0,
                dateTime: false
              }
            },
            {
              name: 'description',
              title: 'description',
              field: 'description',
              type: 'string',
              format: {
                required: false,
                stringType: '',
                min: 0,
                max: 0,
                dateTime: false
              }
            },
            {
              name: 'isSelected',
              title: 'isSelected',
              field: 'isSelected',
              type: 'string',
              format: {
                required: false,
                stringType: '',
                min: 0,
                max: 0,
                dateTime: false
              }
            }
          ],
          type: 'array',
          data: [
            {
              name: '标签页',
              description: '分隔内容上有关联但属于不同类别的数据集合',
              isSelected: 'true',
              _RID: 'row_2'
            },
            {
              name: '布局列',
              description: '列配置信息',
              isSelected: 'true',
              id: '76a7080a',
              _RID: 'row_4'
            },
            {
              name: '日期选择器',
              description: '用于设置/选择日期，包括年月/年月日/年月日时分/年月日时分秒日期格式',
              isSelected: 'true',
              id: '76b20d73',
              _RID: 'row_1'
            },
            {
              name: '走马灯',
              description: '常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现',
              isSelected: 'true',
              id: '4c884c3d'
            }
          ]
        },
        tpl: null,
        app: '918',
        desc: null,
        created_at: '2022-07-04T03:04:05.000Z',
        updated_at: '2022-07-04T03:43:40.000Z'
      }
    ],
    dataHandler: {
      type: 'JSFunction',
      value: 'function dataHanlder(res){\n return res;\n}'
    }
  },
  globalState: [],
  utils: [
    {
      name: 'axios',
      type: 'npm',
      content: {
        type: 'JSFunction',
        value: '',
        package: 'axios',
        destructuring: false,
        exportName: 'axios'
      }
    },
    {
      name: 'Button',
      type: 'npm',
      content: {
        package: '@opentiny/vue',
        version: '',
        exportName: 'Button',
        subName: '',
        destructuring: true,
        main: ''
      }
    },
    {
      name: 'Menu',
      type: 'npm',
      content: {
        type: 'JSFunction',
        value: '',
        package: '@opentiny/vue',
        exportName: 'NavMenu',
        destructuring: true
      }
    },
    {
      name: 'Modal ',
      type: 'npm',
      content: {
        package: '@opentiny/vue',
        version: '',
        exportName: 'Modal ',
        subName: '',
        destructuring: true,
        main: ''
      }
    },
    {
      name: 'npm',
      type: 'function',
      content: {
        type: 'JSFunction',
        value: "''"
      }
    },
    {
      name: 'Pager',
      type: 'npm',
      content: {
        package: '@opentiny/vue',
        version: '',
        exportName: 'Pager',
        subName: '',
        destructuring: true,
        main: ''
      }
    },
    {
      name: 'test',
      type: 'function',
      content: {
        type: 'JSFunction',
        value: "function test() {\r\n  return 'test'\r\n}"
      }
    },
    {
      name: 'util',
      type: 'function',
      content: {
        type: 'JSFunction',
        value: 'function util () {\r\n  console.log(321)\r\n}'
      }
    }
  ],
  i18n: {
    en_US: {
      'lowcode.c257d5e8': 'search',
      'lowcode.61c8ac8c': 'dsdsa',
      'lowcode.f53187a0': 'test',
      'lowcode.97ad00dd': 'createMaterial',
      'lowcode.61dcef52': 'sadasda',
      'lowcode.45f4c42a': 'gfdgfd',
      'lowcode.c6f5a652': 'fsdafds',
      'lowcode.34923432': 'fdsafds',
      'lowcode.6534943e': 'fdsafdsa',
      'lowcode.44252642': 'aaaa',
      'lowcode.2a743651': 'fdsaf',
      'lowcode.24315357': 'fsdafds',
      'lowcode.44621691': 'sd',
      'lowcode.65636226': 'fdsfsd',
      'lowcode.6426a4e2': 'fdsafsd',
      'lowcode.e41c6636': 'aa',
      'lowcode.51c23164': 'aa',
      'lowcode.17245b46': 'aa',
      'lowcode.4573143c': 'a',
      'lowcode.56432442': 'aa',
      'lowcode.33566643': 'aa',
      'lowcode.565128f3': 'aa',
      'lowcode.56643835': 'aa'
    },
    zh_CN: {
      'lowcode.c257d5e8': '查询',
      'lowcode.61c8ac8c': '地方',
      'lowcode.f53187a0': '测试',
      'lowcode.97ad00dd': '创建物料资产包',
      'lowcode.61dcef52': 'terterere',
      'lowcode.45f4c42a': 'gdfgdf',
      'lowcode.c6f5a652': 'fsdaf',
      'lowcode.34923432': 'fdsafdsa',
      'lowcode.48521e45': 'fdsfds',
      'lowcode.6534943e': 'fdsafds',
      'lowcode.44252642': 'fdsafds',
      'lowcode.2a743651': 'sda',
      'lowcode.24315357': 'fdsafds',
      'lowcode.44621691': 'fdsafsd',
      'lowcode.65636226': 'fdsaf',
      'lowcode.6426a4e2': 'sd',
      'lowcode.e41c6636': 'aa',
      'lowcode.51c23164': 'aa',
      'lowcode.17245b46': 'aa',
      'lowcode.4573143c': 'aa',
      'lowcode.56432442': 'aa',
      'lowcode.33566643': 'aa',
      'lowcode.565128f3': 'aa',
      'lowcode.56643835': 'aa'
    }
  },
  pageSchema: [
    {
      state: {},
      methods: {},
      componentName: 'Page',
      css: '',
      props: {},
      lifeCycles: {},
      children: [
        {
          componentName: 'div',
          props: {},
          id: '85375559',
          children: [
            {
              componentName: 'TinySwitch',
              props: {
                modelValue: ''
              },
              id: '33433546'
            }
          ]
        }
      ],
      dataSource: {
        list: []
      },
      utils: [],
      bridge: [],
      inputs: [],
      outputs: [],
      fileName: 'DemoPage',
      meta: {
        name: 'DemoPage',
        id: '5bhD7p5FUsUOTFRN',
        app: '918',
        router: 'demopage',
        tenant: 1,
        isBody: false,
        parentId: '0',
        group: 'staticPages',
        depth: 0,
        isPage: true,
        isDefault: false,
        occupier: {
          id: 86,
          username: '开发者',
          email: 'developer@lowcode.com',
          resetPasswordToken: 'developer',
          confirmationToken: 'dfb2c162-351f-4f44-ad5f-8998',
          is_admin: true
        },
        isHome: false,
        message: 'Page auto save',
        _id: '5bhD7p5FUsUOTFRN'
      }
    },
    {
      state: {
        dataDisk: [1, 2, 3]
      },
      methods: {},
      componentName: 'Page',
      css: 'body {\r\n  background-color:#eef0f5 ;\r\n  margin-bottom: 80px;\r\n}',
      props: {},
      children: [
        {
          componentName: 'div',
          props: {
            style: 'padding-bottom: 10px; padding-top: 10px;'
          },
          id: '2b2cabf0',
          children: [
            {
              componentName: 'TinyTimeLine',
              props: {
                active: '2',
                data: [
                  {
                    name: '基础配置'
                  },
                  {
                    name: '网络配置'
                  },
                  {
                    name: '高级配置'
                  },
                  {
                    name: '确认配置'
                  }
                ],
                horizontal: true,
                style: 'border-radius: 0px;'
              },
              id: 'dd764b17'
            }
          ]
        },
        {
          componentName: 'div',
          props: {
            style:
              'border-width: 1px; border-style: solid; border-radius: 4px; border-color: #fff; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px; background-color: #fff; margin-bottom: 10px;'
          },
          id: '30c94cc8',
          children: [
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '计费模式'
                  },
                  children: [
                    {
                      componentName: 'TinyButtonGroup',
                      props: {
                        data: [
                          {
                            text: '包年/包月',
                            value: '1'
                          },
                          {
                            text: '按需计费',
                            value: '2'
                          }
                        ],
                        modelValue: '1'
                      },
                      id: 'a8d84361'
                    }
                  ],
                  id: '9f39f3e7'
                },
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '区域'
                  },
                  children: [
                    {
                      componentName: 'TinyButtonGroup',
                      props: {
                        data: [
                          {
                            text: '乌兰察布二零一',
                            value: '1'
                          }
                        ],
                        modelValue: '1',
                        style: 'border-radius: 0px; margin-right: 10px;'
                      },
                      id: 'c97ccd99'
                    },
                    {
                      componentName: 'Text',
                      props: {
                        text: '温馨提示：页面左上角切换区域',
                        style: 'background-color: [object Event]; color: #8a8e99; font-size: 12px;'
                      },
                      id: '20923497'
                    },
                    {
                      componentName: 'Text',
                      props: {
                        text: '不同区域的云服务产品之间内网互不相通；请就近选择靠近您业务的区域，可减少网络时延，提高访问速度',
                        style: 'display: block; color: #8a8e99; border-radius: 0px; font-size: 12px;'
                      },
                      id: '54780a26'
                    }
                  ],
                  id: '4966384d'
                },
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '可用区',
                    style: 'border-radius: 0px;'
                  },
                  children: [
                    {
                      componentName: 'TinyButtonGroup',
                      props: {
                        data: [
                          {
                            text: '可用区1',
                            value: '1'
                          },
                          {
                            text: '可用区2',
                            value: '2'
                          },
                          {
                            text: '可用区3',
                            value: '3'
                          }
                        ],
                        modelValue: '1'
                      },
                      id: '6184481b'
                    }
                  ],
                  id: '690837bf'
                }
              ],
              id: 'b6a425d4'
            }
          ]
        },
        {
          componentName: 'div',
          props: {
            style:
              'border-width: 1px; border-style: solid; border-radius: 4px; border-color: #fff; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px; background-color: #fff; margin-bottom: 10px;'
          },
          children: [
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: 'CPU架构'
                  },
                  children: [
                    {
                      componentName: 'TinyButtonGroup',
                      props: {
                        data: [
                          {
                            text: 'x86计算',
                            value: '1'
                          },
                          {
                            text: '鲲鹏计算',
                            value: '2'
                          }
                        ],
                        modelValue: '1'
                      },
                      id: '7d33ced7'
                    }
                  ],
                  id: '05ed5a79'
                },
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '区域'
                  },
                  children: [
                    {
                      componentName: 'div',
                      props: {
                        style: 'display: flex; justify-content: flex-start; align-items: center;'
                      },
                      id: '606edf78',
                      children: [
                        {
                          componentName: 'div',
                          props: {
                            style: 'display: flex; align-items: center; margin-right: 10px;'
                          },
                          id: 'f3f98246',
                          children: [
                            {
                              componentName: 'Text',
                              props: {
                                text: 'vCPUs',
                                style: 'width: 80px;'
                              },
                              id: 'c287437e'
                            },
                            {
                              componentName: 'TinySelect',
                              props: {
                                modelValue: '',
                                placeholder: '请选择',
                                options: [
                                  {
                                    value: '1',
                                    label: '黄金糕'
                                  },
                                  {
                                    value: '2',
                                    label: '双皮奶'
                                  }
                                ]
                              },
                              id: '4c43286b'
                            }
                          ]
                        },
                        {
                          componentName: 'div',
                          props: {
                            style: 'display: flex; align-items: center; margin-right: 10px;'
                          },
                          children: [
                            {
                              componentName: 'Text',
                              props: {
                                text: '内存',
                                style: 'width: 80px; border-radius: 0px;'
                              },
                              id: '38b8fa1f'
                            },
                            {
                              componentName: 'TinySelect',
                              props: {
                                modelValue: '',
                                placeholder: '请选择',
                                options: [
                                  {
                                    value: '1',
                                    label: '黄金糕'
                                  },
                                  {
                                    value: '2',
                                    label: '双皮奶'
                                  }
                                ]
                              },
                              id: 'cd33328e'
                            }
                          ],
                          id: '2b2c678f'
                        },
                        {
                          componentName: 'div',
                          props: {
                            style: 'display: flex; align-items: center;'
                          },
                          children: [
                            {
                              componentName: 'Text',
                              props: {
                                text: '规格名称',
                                style: 'width: 80px;'
                              },
                              id: 'd3eb6352'
                            },
                            {
                              componentName: 'TinySearch',
                              props: {
                                modelValue: '',
                                placeholder: '输入关键词'
                              },
                              id: '21cb9282'
                            }
                          ],
                          id: 'b8e0f35c'
                        }
                      ]
                    },
                    {
                      componentName: 'div',
                      props: {
                        style: 'border-radius: 0px;'
                      },
                      id: '5000c83e',
                      children: [
                        {
                          componentName: 'TinyButtonGroup',
                          props: {
                            data: [
                              {
                                text: '通用计算型',
                                value: '1'
                              },
                              {
                                text: '通用计算增强型',
                                value: '2'
                              },
                              {
                                text: '内存优化型',
                                value: '3'
                              },
                              {
                                text: '内存优化型',
                                value: '4'
                              },
                              {
                                text: '磁盘增强型',
                                value: '5'
                              },
                              {
                                text: '超高I/O型',
                                value: '6'
                              },
                              {
                                text: 'GPU加速型',
                                value: '7'
                              }
                            ],
                            modelValue: '1',
                            style: 'border-radius: 0px; margin-top: 12px;'
                          },
                          id: 'b8724703'
                        },
                        {
                          componentName: 'TinyGrid',
                          props: {
                            editConfig: {
                              trigger: 'click',
                              mode: 'cell',
                              showStatus: true
                            },
                            columns: [
                              {
                                type: 'radio',
                                width: 60
                              },
                              {
                                field: 'employees',
                                title: '规格名称'
                              },
                              {
                                field: 'created_date',
                                title: 'vCPUs | 内存(GiB)',
                                sortable: true
                              },
                              {
                                field: 'city',
                                title: 'CPU',
                                sortable: true
                              },
                              {
                                title: '基准 / 最大带宽\t',
                                sortable: true
                              },
                              {
                                title: '内网收发包',
                                sortable: true
                              }
                            ],
                            data: [
                              {
                                id: '1',
                                name: 'GFD科技有限公司',
                                city: '福州',
                                employees: 800,
                                created_date: '2014-04-30 00:56:00',
                                boole: false
                              },
                              {
                                id: '2',
                                name: 'WWW科技有限公司',
                                city: '深圳',
                                employees: 300,
                                created_date: '2016-07-08 12:36:22',
                                boole: true
                              }
                            ],
                            style: 'margin-top: 12px; border-radius: 0px;',
                            'auto-resize': true
                          },
                          id: '77701c25'
                        },
                        {
                          componentName: 'div',
                          props: {
                            style: 'margin-top: 12px; border-radius: 0px;'
                          },
                          id: '3339838b',
                          children: [
                            {
                              componentName: 'Text',
                              props: {
                                text: '当前规格',
                                style: 'width: 150px; display: inline-block;'
                              },
                              id: '203b012b'
                            },
                            {
                              componentName: 'Text',
                              props: {
                                text: '通用计算型 | Si2.large.2 | 2vCPUs | 4 GiB',
                                style: 'font-weight: 700;'
                              },
                              id: '87723f52'
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  id: '657fb2fc'
                }
              ],
              id: 'd19b15cf'
            }
          ],
          id: '9991228b'
        },
        {
          componentName: 'div',
          props: {
            style:
              'border-width: 1px; border-style: solid; border-radius: 4px; border-color: #fff; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px; background-color: #fff; margin-bottom: 10px;'
          },
          children: [
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '镜像',
                    style: 'border-radius: 0px;'
                  },
                  children: [
                    {
                      componentName: 'TinyButtonGroup',
                      props: {
                        data: [
                          {
                            text: '公共镜像',
                            value: '1'
                          },
                          {
                            text: '私有镜像',
                            value: '2'
                          },
                          {
                            text: '共享镜像',
                            value: '3'
                          }
                        ],
                        modelValue: '1'
                      },
                      id: '922b14cb'
                    },
                    {
                      componentName: 'div',
                      props: {
                        style: 'display: flex; margin-top: 12px; border-radius: 0px;'
                      },
                      id: '6b679524',
                      children: [
                        {
                          componentName: 'TinySelect',
                          props: {
                            modelValue: '',
                            placeholder: '请选择',
                            options: [
                              {
                                value: '1',
                                label: '黄金糕'
                              },
                              {
                                value: '2',
                                label: '双皮奶'
                              }
                            ],
                            style: 'width: 170px; margin-right: 10px;'
                          },
                          id: '4851fff7'
                        },
                        {
                          componentName: 'TinySelect',
                          props: {
                            modelValue: '',
                            placeholder: '请选择',
                            options: [
                              {
                                value: '1',
                                label: '黄金糕'
                              },
                              {
                                value: '2',
                                label: '双皮奶'
                              }
                            ],
                            style: 'width: 340px;'
                          },
                          id: 'a7183eb7'
                        }
                      ]
                    },
                    {
                      componentName: 'div',
                      props: {
                        style: 'margin-top: 12px;'
                      },
                      id: '57aee314',
                      children: [
                        {
                          componentName: 'Text',
                          props: {
                            text: '请注意操作系统的语言类型。',
                            style: 'color: #e37d29;'
                          },
                          id: '56d36c27'
                        }
                      ]
                    }
                  ],
                  id: 'e3b02436'
                }
              ],
              id: '59aebf2b'
            }
          ],
          id: '87ff7b99'
        },
        {
          componentName: 'div',
          props: {
            style:
              'border-width: 1px; border-style: solid; border-radius: 4px; border-color: #fff; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px; background-color: #fff; margin-bottom: 10px;'
          },
          children: [
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '系统盘',
                    style: 'border-radius: 0px;'
                  },
                  children: [
                    {
                      componentName: 'div',
                      props: {
                        style: 'display: flex;'
                      },
                      id: 'cddba5b8',
                      children: [
                        {
                          componentName: 'TinySelect',
                          props: {
                            modelValue: '',
                            placeholder: '请选择',
                            options: [
                              {
                                value: '1',
                                label: '黄金糕'
                              },
                              {
                                value: '2',
                                label: '双皮奶'
                              }
                            ],
                            style: 'width: 200px; margin-right: 10px;'
                          },
                          id: 'a97fbe15'
                        },
                        {
                          componentName: 'TinyInput',
                          props: {
                            placeholder: '请输入',
                            modelValue: '',
                            style: 'width: 120px; margin-right: 10px;'
                          },
                          id: '1cde4c0f'
                        },
                        {
                          componentName: 'Text',
                          props: {
                            text: 'GiB   \nIOPS上限240，IOPS突发上限5,000',
                            style: 'color: #575d6c; font-size: 12px;'
                          },
                          id: '2815d82d'
                        }
                      ]
                    }
                  ],
                  id: '50239a3a'
                }
              ],
              id: 'e8582986'
            },
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [
                {
                  componentName: 'TinyFormItem',
                  props: {
                    label: '数据盘',
                    style: 'border-radius: 0px;'
                  },
                  children: [
                    {
                      componentName: 'div',
                      props: {
                        style: 'margin-top: 12px; display: flex;'
                      },
                      id: '728c9825',
                      children: [
                        {
                          componentName: 'Icon',
                          props: {
                            style: 'margin-right: 10px; width: 16px; height: 16px;',
                            name: 'IconPanelMini'
                          },
                          id: 'fded6930'
                        },
                        {
                          componentName: 'TinySelect',
                          props: {
                            modelValue: '',
                            placeholder: '请选择',
                            options: [
                              {
                                value: '1',
                                label: '黄金糕'
                              },
                              {
                                value: '2',
                                label: '双皮奶'
                              }
                            ],
                            style: 'width: 200px; margin-right: 10px;'
                          },
                          id: '62734e3f'
                        },
                        {
                          componentName: 'TinyInput',
                          props: {
                            placeholder: '请输入',
                            modelValue: '',
                            style: 'width: 120px; margin-right: 10px;'
                          },
                          id: '667c7926'
                        },
                        {
                          componentName: 'Text',
                          props: {
                            text: 'GiB   \nIOPS上限600，IOPS突发上限5,000',
                            style: 'color: #575d6c; font-size: 12px; margin-right: 10px;'
                          },
                          id: 'e7bc36d6'
                        },
                        {
                          componentName: 'TinyInput',
                          props: {
                            placeholder: '请输入',
                            modelValue: '',
                            style: 'width: 120px;'
                          },
                          id: '1bd56dc0'
                        }
                      ],
                      loop: {
                        type: 'JSExpression',
                        value: 'this.state.dataDisk'
                      }
                    },
                    {
                      componentName: 'div',
                      props: {
                        style: 'display: flex; margin-top: 12px; border-radius: 0px;'
                      },
                      children: [
                        {
                          componentName: 'Icon',
                          props: {
                            name: 'IconPlus',
                            style: 'width: 16px; height: 16px; margin-right: 10px;'
                          },
                          id: '65c89f2b'
                        },
                        {
                          componentName: 'Text',
                          props: {
                            text: '增加一块数据盘',
                            style: 'font-size: 12px; border-radius: 0px; margin-right: 10px;'
                          },
                          id: 'cb344071'
                        },
                        {
                          componentName: 'Text',
                          props: {
                            text: '您还可以挂载 21 块磁盘（云硬盘）',
                            style: 'color: #8a8e99; font-size: 12px;'
                          },
                          id: '80eea996'
                        }
                      ],
                      id: 'e9e530ab'
                    }
                  ],
                  id: '078e03ef'
                }
              ],
              id: 'ccef886e'
            }
          ],
          id: '0fb7bd74'
        },
        {
          componentName: 'div',
          props: {
            style:
              'border-width: 1px; border-style: solid; border-color: #ffffff; padding-top: 10px; padding-left: 10px; padding-right: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px; background-color: #fff; position: fixed; inset: auto 0% 0% 0%; height: 80px; line-height: 80px; border-radius: 0px;'
          },
          children: [
            {
              componentName: 'TinyForm',
              props: {
                labelWidth: '80px',
                labelPosition: 'top',
                inline: false,
                'label-position': 'left ',
                'label-width': '150px',
                style: 'border-radius: 0px;'
              },
              children: [],
              id: '21ed4475'
            },
            {
              componentName: 'TinyRow',
              props: {
                style: 'border-radius: 0px; height: 100%;'
              },
              children: [
                {
                  componentName: 'TinyCol',
                  props: {
                    span: '8'
                  },
                  id: 'b9d051a5',
                  children: [
                    {
                      componentName: 'TinyRow',
                      props: {
                        style: 'border-radius: 0px;'
                      },
                      children: [
                        {
                          componentName: 'TinyCol',
                          props: {
                            span: '5',
                            style: 'display: flex;'
                          },
                          id: '02352776',
                          children: [
                            {
                              componentName: 'Text',
                              props: {
                                text: '购买量',
                                style: 'margin-right: 10px;'
                              },
                              id: '0cd9ed5c'
                            },
                            {
                              componentName: 'TinyInput',
                              props: {
                                placeholder: '请输入',
                                modelValue: '',
                                style: 'width: 120px; margin-right: 10px;'
                              },
                              id: '2f9cf442'
                            },
                            {
                              componentName: 'Text',
                              props: {
                                text: '台'
                              },
                              id: 'facd4481'
                            }
                          ]
                        },
                        {
                          componentName: 'TinyCol',
                          props: {
                            span: '7'
                          },
                          id: '82b6c659',
                          children: [
                            {
                              componentName: 'div',
                              props: {},
                              id: '9cd65874',
                              children: [
                                {
                                  componentName: 'Text',
                                  props: {
                                    text: '配置费用',
                                    style: 'font-size: 12px;'
                                  },
                                  id: 'b5a0a0da'
                                },
                                {
                                  componentName: 'Text',
                                  props: {
                                    text: '¥1.5776',
                                    style: 'padding-left: 10px; padding-right: 10px; color: #de504e;'
                                  },
                                  id: 'd9464214'
                                },
                                {
                                  componentName: 'Text',
                                  props: {
                                    text: '/小时',
                                    style: 'font-size: 12px;'
                                  },
                                  id: 'af7cc5e6'
                                }
                              ]
                            },
                            {
                              componentName: 'div',
                              props: {},
                              id: '89063830',
                              children: [
                                {
                                  componentName: 'Text',
                                  props: {
                                    text: '参考价格，具体扣费请以账单为准。',
                                    style: 'font-size: 12px; border-radius: 0px;'
                                  },
                                  id: 'd8995fbc'
                                },
                                {
                                  componentName: 'Text',
                                  props: {
                                    text: '了解计费详情',
                                    style: 'font-size: 12px; color: #344899;'
                                  },
                                  id: 'b383c3e2'
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      id: '94fc0e43'
                    }
                  ]
                },
                {
                  componentName: 'TinyCol',
                  props: {
                    span: '4',
                    style:
                      'display: flex; flex-direction: row-reverse; border-radius: 0px; height: 100%; justify-content: flex-start; align-items: center;'
                  },
                  id: '10b73009',
                  children: [
                    {
                      componentName: 'TinyButton',
                      props: {
                        text: '下一步: 网络配置',
                        type: 'danger',
                        style: 'max-width: unset;'
                      },
                      id: '0b584011'
                    }
                  ]
                }
              ],
              id: 'd414a473'
            }
          ],
          id: 'e8ec029b'
        }
      ],
      fileName: 'createVm',
      meta: {
        name: 'createVm',
        id: 'NTJ4MjvqoVj8OVsc',
        app: '918',
        router: 'createVm',
        tenant: 1,
        isBody: false,
        parentId: '0',
        group: 'staticPages',
        depth: 0,
        isPage: true,
        isDefault: false,
        occupier: {
          id: 86,
          username: '开发者',
          email: 'developer@lowcode.com',
          resetPasswordToken: 'developer',
          confirmationToken: 'dfb2c162-351f-4f44-ad5f-8998',
          is_admin: true
        },
        isHome: false,
        _id: 'NTJ4MjvqoVj8OVsc'
      }
    }
  ],
  componentsMap: [
    {
      componentName: 'TinyCarouselItem',
      package: '@opentiny/vue',
      exportName: 'CarouselItem',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyCheckboxButton',
      package: '@opentiny/vue',
      exportName: 'CheckboxButton',
      destructuring: true,
      version: '0.1.17'
    },
    {
      componentName: 'TinyTree',
      package: '@opentiny/vue',
      exportName: 'Tree',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyPopover',
      package: '@opentiny/vue',
      exportName: 'Popover',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyTooltip',
      package: '@opentiny/vue',
      exportName: 'Tooltip',
      destructuring: true,
      version: '3.2.0'
    },
    {
      componentName: 'TinyCol',
      package: '@opentiny/vue',
      exportName: 'Col',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyDropdownItem',
      package: '@opentiny/vue',
      exportName: 'DropdownItem',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyPager',
      package: '@opentiny/vue',
      exportName: 'Pager',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyPlusAccessdeclined',
      package: '@opentiny/vue',
      exportName: 'AccessDeclined',
      destructuring: true,
      version: '3.4.1'
    },
    {
      componentName: 'TinyPlusFrozenPage',
      package: '@opentiny/vue',
      exportName: 'FrozenPage',
      destructuring: true,
      version: '3.4.1'
    },
    {
      componentName: 'TinyPlusNonSupportRegion',
      package: '@opentiny/vue',
      exportName: 'NonSupportRegion',
      destructuring: true,
      version: '3.4.1'
    },
    {
      componentName: 'TinyPlusBeta',
      package: '@opentiny/vue',
      exportName: 'Beta',
      destructuring: true,
      version: '3.4.1'
    },
    {
      componentName: 'TinySearch',
      package: '@opentiny/vue',
      exportName: 'Search',
      destructuring: true,
      version: '0.1.13'
    },
    {
      componentName: 'TinyRow',
      package: '@opentiny/vue',
      exportName: 'Row',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyFormItem',
      package: '@opentiny/vue',
      exportName: 'FormItem',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyAlert',
      package: '@opentiny/vue',
      exportName: 'Alert',
      destructuring: true,
      version: '3.2.0'
    },
    {
      componentName: 'TinyInput',
      package: '@opentiny/vue',
      exportName: 'Input',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyTabs',
      package: '@opentiny/vue',
      exportName: 'Tabs',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyDropdownMenu',
      package: '@opentiny/vue',
      exportName: 'DropdownMenu',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyDialogBox',
      package: '@opentiny/vue',
      exportName: 'DialogBox',
      destructuring: true,
      version: '3.2.0'
    },
    {
      componentName: 'TinySwitch',
      package: '@opentiny/vue',
      exportName: 'Switch',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyTimeLine',
      package: '@opentiny/vue',
      exportName: 'TimeLine',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyTabItem',
      package: '@opentiny/vue',
      exportName: 'TabItem',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyRadio',
      package: '@opentiny/vue',
      exportName: 'Radio',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyForm',
      package: '@opentiny/vue',
      exportName: 'Form',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyGrid',
      package: '@opentiny/vue',
      exportName: 'Grid',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyNumeric',
      package: '@opentiny/vue',
      exportName: 'Numeric',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyCheckboxGroup',
      package: '@opentiny/vue',
      exportName: 'CheckboxGroup',
      destructuring: true,
      version: '0.1.17'
    },
    {
      componentName: 'TinySelect',
      package: '@opentiny/vue',
      exportName: 'Select',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyButtonGroup',
      package: '@opentiny/vue',
      exportName: 'ButtonGroup',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyCarousel',
      package: '@opentiny/vue',
      exportName: 'Carousel',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyPopeditor',
      package: '@opentiny/vue',
      exportName: 'Popeditor',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyDatePicker',
      package: '@opentiny/vue',
      exportName: 'DatePicker',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'TinyDropdown',
      package: '@opentiny/vue',
      exportName: 'Dropdown',
      destructuring: true,
      version: '0.1.20'
    },
    {
      componentName: 'TinyChartHistogram',
      package: '@opentiny/vue',
      exportName: 'ChartHistogram',
      destructuring: true,
      version: '0.1.16'
    },
    {
      componentName: 'PortalHome',
      main: 'common/components/home',
      destructuring: false,
      version: '1.0.0'
    },
    {
      componentName: 'PreviewBlock1',
      main: 'preview',
      destructuring: false,
      version: '1.0.0'
    },
    {
      componentName: 'PortalHeader',
      main: 'common',
      destructuring: false,
      version: '1.0.0'
    },
    {
      componentName: 'PortalBlock',
      main: 'portal',
      destructuring: false,
      version: '1.0.0'
    },
    {
      componentName: 'PortalPermissionBlock',
      main: '',
      destructuring: false,
      version: '1.0.0'
    }
  ],
  meta: {
    name: 'portal-app',
    tenant: 1,
    git_group: '',
    project_name: '',
    description: 'demo应用',
    branch: 'develop',
    is_demo: null,
    global_state: [],
    appId: '918',
    creator: '',
    gmt_create: '2022-06-08 03:19:01',
    gmt_modified: '2023-08-23 10:22:28'
  }
}
