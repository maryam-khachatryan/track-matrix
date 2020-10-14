<template>
    <v-tab-item value="tab-1">
        <v-main class="fill-height pa-5">
            <v-row>
                <v-col lg="8" md="8" sm="12" class="mb-5">
                    <label class="mb-3 card-title ">Title</label>
                    <base-input  placeholder="Placeholder" />

                    <label class="card-title">Description</label>
                    <v-main class="mt-3 mb-5">
                        <TextEditor />
                    </v-main>   

                    <label class="card-title">Images</label>
                    <v-card class="px-4 py-5 mt-3 mb-5">
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    v-for="n in 3"
                                    :key="n"
                                    class="d-flex child-flex"
                                    lg="3"
                                    md="3"
                                    sm="12"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <!-- wer -->
                    <label class="card-title">Variants</label>
                    <v-card class="px-4 py-5 mt-3 mb-5"> 
                        <v-container fluid>
                            <v-row class="justify-end">
                                <v-btn text href="/fooRoute" color="info">Add Variant</v-btn>
                            </v-row>
                            <v-row  v-for="n in 2"
                                    :key="n"
                                    class="d-flex child-flex"
                                    >
                                <v-col lg="2"
                                    md="2"
                                    sm="12">
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                        ></v-img>
                                    </v-card>
                                </v-col>

                                <v-col lg="3"
                                    md="3"
                                    sm="12"
                                    class="align-center d-flex">
                                    <h4>BoddyPhones Dragon</h4>
                                </v-col>

                                <v-col lg="3"
                                    md="3"
                                    sm="12"
                                    class="align-center d-flex">
                                    <h4>SKU-0000</h4>
                                </v-col>

                                <v-col lg="3"
                                    md="3"
                                    sm="12"
                                    class="align-center d-flex">
                                    <h4>50</h4>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>  

                    <label class="card-title">Landing Page Template</label>
                    <v-card class="px-4 py-5 mt-3 mb-5">
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    class="d-flex child-flex"
                                    lg="4"
                                    md="4"
                                    sm="12"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${2 * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/500/300?image=${2 * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                            >
                                            <div class="fill-height d-flex flex-column">
                                                <v-icon color="secondary"
                                                    class="mt-2 mr-2 ml-auto">mdi-circle-edit-outline</v-icon>
                                                <base-switch v-model="switch1"
                                                    class="mx-auto mt-auto mb-2"/>
                                            </div>                                  
                                        </v-img>
                                    </v-card>
                                </v-col>

                                <v-col
                                    class="d-flex child-flex"
                                    lg="4"
                                    md="4"
                                    sm="12"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${5 + 10}`"
                                            :lazy-src="`https://picsum.photos/500/300?image=${5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                            >
                                            <div class="fill-height d-flex flex-column">
                                                <v-btn color="primary" class="mx-auto mt-auto mb-5">Create Template</v-btn>
                                            </div>                                  
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <label class="card-title">Package Design</label>
                    <v-card class="px-4 py-5 mt-3 mb-5">
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    class="d-flex child-flex"
                                    lg="4"
                                    md="4"
                                    sm="12"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${2 * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/500/300?image=${2 * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                            >
                                            <div class="fill-height d-flex flex-column">
                                                <v-icon color="secondary"
                                                    class="mt-2 mr-2 ml-auto">mdi-circle-edit-outline</v-icon>
                                                <v-btn color="primary" class="mx-auto mt-auto mb-5">Order Packaging</v-btn>

                                            </div>                                  
                                        </v-img>
                                    </v-card>
                                </v-col>

                                <v-col
                                    class="d-flex child-flex"
                                    lg="4"
                                    md="4"
                                    sm="12"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="`https://picsum.photos/500/300?image=${5 + 10}`"
                                            :lazy-src="`https://picsum.photos/500/300?image=${5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                            >
                                            <div class="fill-height d-flex flex-column">
                                                <v-btn color="primary" class="mx-auto mt-auto mb-5">Create Design</v-btn>
                                            </div>                                  
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <div class="d-flex">
                        <label class="card-title">Identifiers</label>
                        <v-btn color="primary" class="ml-4">Generate Identifiers</v-btn>
                    </div>
                    <v-card class="mt-3 mb-5">
                        <v-simple-table fixed-header height="300px">
                            <template v-slot:default>
                             <thead>
                                <tr>
                                    <th class="text-left">
                                        <div class="d-flex align-center">
                                            <v-checkbox
                                                v-model="checkbox"
                                            ></v-checkbox>
                                            <span>Product Name</span>
                                        </div>
                                    </th>
                                    <th class="text-left">Tag Type</th>
                                    <th class="text-left">
                                        <v-tooltip right
                                            max-width="200"
                                            open-on-click
                                            :open-on-hover="false">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon v-bind="attrs"
                                                    v-on="on"
                                                    color="primary">mdi-dots-vertical</v-icon>
                                            </template>
                                            <div class="d-flex flex-column p-2">
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-arrow-collapse-down</v-icon>
                                                    <span>Download</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-trash-can-outline</v-icon>
                                                    <span>Delete</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <base-switch />
                                                <v-divider></v-divider>
                                                <base-select
                                                    :items="items"
                                                    placeholder="Select Location"/>
                                            </div>
                                        </v-tooltip>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in desserts" :key="item.name">
                                    <td>
                                        <div class="d-flex align-center">
                                            <v-checkbox
                                                v-model="checkbox"
                                            ></v-checkbox>
                                            <span>{{ item.name }}</span>
                                        </div>
                                    </td>
                                    <td>{{ item.calories }}</td>
                                    <td class="text-left">
                                       <v-tooltip right
                                            max-width="200"
                                            open-on-click
                                            :open-on-hover="false">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon v-bind="attrs"
                                                    v-on="on"
                                                    color="primary">mdi-dots-vertical</v-icon>
                                            </template>
                                            <div class="d-flex flex-column p-2">
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-arrow-collapse-down</v-icon>
                                                    <span>Download</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-trash-can-outline</v-icon>
                                                    <span>Delete</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <base-switch />
                                                <v-divider></v-divider>
                                                <base-select
                                                    :items="items"
                                                    placeholder="Select Location"/>
                                            </div>
                                        </v-tooltip>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-center">
                                            <v-checkbox
                                                v-model="checkbox"
                                            ></v-checkbox>
                                            <span>SKU-00000</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span>Digital</span>
                                        <v-tooltip bottom max-width="130"
                                            open-on-click
                                            :open-on-hover="false">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon class="ml-3"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    color="primary">mdi-information-outline </v-icon>
                                            </template>
                                            <div class="d-flex flex-column">
                                                <span class="mb-3">Physical label order created on 22/11/2020</span>
                                                <v-divider></v-divider>
                                                <v-btn color="primary" class="mt-3">Active</v-btn>
                                            </div>
                                        </v-tooltip>
                                    </td>
                                    <td class="text-left">
                                        <v-tooltip right
                                            max-width="200"
                                            open-on-click
                                            :open-on-hover="false">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon v-bind="attrs"
                                                    v-on="on"
                                                    color="primary">mdi-dots-vertical</v-icon>
                                            </template>
                                            <div class="d-flex flex-column p-2">
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-arrow-collapse-down</v-icon>
                                                    <span>Download</span>
                                                </div>
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-overscan</v-icon>
                                                    <span>View Code</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <div class="py-4">
                                                    <v-icon class="mr-2" color="primary">mdi-trash-can-outline</v-icon>
                                                    <span>Delete</span>
                                                </div>
                                                <v-divider></v-divider>
                                                <base-switch />
                                                <v-divider></v-divider>
                                                <base-select
                                                    :items="items"
                                                    placeholder="Select Location"/>
                                            </div>
                                        </v-tooltip>
                                    </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col> 
                              
                <v-col lg="4" md="4" sm="12" class="mt-lg-3 mt-md-3 mt-sm-3">
                    <label class="card-title">Organisation</label>
                    <v-card color="secondary"
                        class="px-4 py-5 mt-3 mb-5">
                        <base-select
                                v-model="productType"
                                :items="items"
                                label="Product type"
                                placeholder="Solo field"
                                solo
                                multiple />

                        <base-select
                                v-model="productTypeDisable"
                                :items="items"
                                label="Category"
                                placeholder="Solo field"
                                multiple
                                disabled />

                        <base-input placeholder="Solo field"
                                    label="Product SKU"/>

                        <base-input placeholder="$99.9"
                                    label="Price"/>

                        <base-select
                                v-model="productType"
                                :items="items"
                                label="Subcategory"
                                placeholder="$99.9"
                                multiple
                                disabled/>

                        <base-select
                                v-model="productType"
                                :items="items"
                                label="Manufacturer"
                                placeholder="Placeholder"
                                multiple />

                        <base-select
                                v-model="productType"
                                :items="items"
                                label="Region"
                                placeholder="Placeholder"
                                multiple />
                    </v-card>

                    <label class="card-title">Assigment</label>
                    <v-card color="secondary"
                            class="px-4 py-5 mt-3 mb-5">
                        <div class="d-flex flex-lg-row flex-md-row flex-sm-column d-md-flex justify-space-between align-center">
                            <label>TotalProduct Quantity</label>
                            <base-switch
                                    v-model="switch1"
                                    :label="`Switch 1: ${switch1.toString()}`" />
                        </div>
                        
                        <label>Product location</label>
                        <v-row class="d-flex align-baseline">
                            <v-col lg="4" md="6" sm="12">
                                <base-select
                                    :items="items"
                                    placeholder="Placeholder"/>
                            </v-col>

                            <v-col lg="3" md="6" sm="12">
                                <base-input
                                    value="500"/>
                            </v-col>
                            
                            <v-col lg="4" md="6" sm="12">
                                <v-chip color="primary">
                                    <v-icon>mdi-plus</v-icon>
                                    <span>Add Location</span>
                                </v-chip>
                            </v-col>
                        </v-row>

                        <base-date-picker label="Date of Activation" />
                    </v-card>
                    
                    <label class="card-title">Deployment</label>
                    <v-card color="secondary"
                            class="px-4 py-5 mt-3">
                        <v-row class="align-center">
                            <v-col lg="4" md="4" sm="4">
                                <v-img src="@/assets/imgs/shopify.png" aspect-ratio="2" contain></v-img>
                            </v-col>
                            <v-col lg="4" md="4" sm="4" offset-lg="3" offset-md="3" offset-sm="1">
                                <base-switch
                                    v-model="switch1"
                                    label="Activate" />
                            </v-col>
                        </v-row>

                        <v-row class="align-center">
                            <v-col lg="4" md="4" sm="4">
                                <v-img src="@/assets/imgs/amazon.png" aspect-ratio="2" contain></v-img>
                            </v-col>
                            <v-col lg="4" md="4" sm="4" offset-lg="3" offset-md="3" offset-sm="1">
                                <base-switch
                                    v-model="switch1"
                                    label="Activate" />
                            </v-col>
                        </v-row>

                        <v-row class="align-center">
                            <v-col lg="4" md="4" sm="4">
                                <v-img src="@/assets/imgs/ebay-logo-1-1200x630-margin.png" aspect-ratio="2" contain></v-img>
                            </v-col>
                            <v-col lg="4" md="4" sm="4" offset-lg="3" offset-md="3" offset-sm="1">
                                <base-switch
                                    v-model="switch1"
                                    label="Activate" />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col lg="6" md="6" sm="6">
                                <v-btn text href="/fooRoute" color="info" class="">Create Accounts
                                    <v-icon color="primary" class="ml-4">mdi-arrow-right</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-row>
                        <v-col cols="12">
                            <v-btn color="primary" block>Create</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-main>
    </v-tab-item>
</template>

<script>
import TextEditor from './TextEditor'

  export default {
    name: 'ProductDetails',
    components: { TextEditor },

    data: () => ({
        tab: 'tab-1',
        items: ['HEADPHONES', 'ONADNOFF', 'AMAZON', '1-30 YEARS OLD', 'SUBCATEGOY'],
        productType: ['HEADPHONES'],
        switch1: false,
        productTypeDisable: ['1-30 YEARS OLD'],
        desserts: [
          {
            name: 'SKU-00000',
            calories: 'Digital',
          },
          {
            name: 'SKU-00000',
            calories: 'Digital',
          }
        ],
        checkbox: false,
        show: true
    }),
    computed: {
        vertical () {
            return this.windowWidth <= 991;
        }
    },
    mounted () {
        setInterval(() => {
            this.handleResize()
        }, 300)
    },
    methods: {
        handleResize () {
            this.windowWidth =  window.innerWidth
        }
    }
  }
</script>

<style lang="scss">
</style>
