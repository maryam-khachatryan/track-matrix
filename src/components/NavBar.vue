<template>
    <div class="fill-height">
        <v-app-bar color="#000B2C"
                   class="app-bar"
                   height="70px">
            <v-app-bar-nav-icon @click.stop="mini = !mini "></v-app-bar-nav-icon>
            <v-img src="@/assets/imgs/flooop.png" aspect-ratio="2" contain
                    height="65px ">
            </v-img>

            <v-list-item d-flex justify-end>
                <v-list-item-icon>
                    <v-icon>mdi-moon-last-quarter </v-icon>
                    <v-icon>mdi-cog-outline</v-icon>
                    <v-icon class="mx-2">mdi-chevron-down</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-app-bar>

        <v-sheet
            height="100%"
            class="overflow-hidden"
            color="secondary">
            <v-container fluid pa-0 class="fill-height">
                <v-navigation-drawer
                    v-model="drawer"
                    :mini-variant.sync="mini"
                    permanent
                    width="270"
                    height="100%"
                    class="side-bar"
                    >
                    <v-list>
                        <v-list-item class="left-bar-title">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-group
                            prepend-icon="mdi-account-circle"
                            value="true"
                            active-class="menu-active-item"
                        >
                            <template v-slot:activator>
                                <v-list-item-title>Product Analytics</v-list-item-title>
                            </template>

                            <v-list-item
                                v-for="(admin, i) in admins"
                                :key="i + 'admin-1'"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="admin[0]"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>

                        <v-list-group
                            prepend-icon="mdi-account-circle"
                            value="true"
                            active-class="menu-active-item"
                        >
                            <template v-slot:activator>
                            <v-list-item-title>Manage Inventory</v-list-item-title>
                            </template>

                            <v-list-item
                                v-for="(admin, i) in admins"
                                :key="i + 'admin-2'"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="admin[0]"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-navigation-drawer>

                <v-main class="fill-height"
                    :style="{ width: `calc(100% - ${drawer ? '270px' : '56px'})`}">
                    <v-container fluid>
                        <div>
                            <p>All Products</p>
                        </div>
                        <v-card class="fill-height">
                            <v-tabs
                                v-model="tab"
                                align-with-title
                                :height="!vertical ? '62px' : '140px'"
                                :grow="vertical"
                                :vertical="vertical">
                                <v-tab href="#tab-1" class="ml-4">Product Details</v-tab>
                                <v-tab href="#tab-2" class="mx-5">Orders</v-tab>
                                <v-tab href="#tab-3" class="mr-4">Location Management</v-tab>
                            </v-tabs>

                            <v-divider :inset="inset"></v-divider>

                            <v-tabs-items v-model="tab">
                                <ProductDetails />
                            </v-tabs-items>
                        </v-card>
                    </v-container>
                </v-main>

            </v-container>
        </v-sheet>
    </div>
</template>

<script>
import ProductDetails from './ProductDetails'

  export default {
    components: {
        ProductDetails
    },
    name: 'NavBar',

    data: () => ({
        collapseOnScroll: true,
        drawer: false,
        group: null,
         admins: [
            ['Create', 'mdi-add'],
            ['Settings', 'mdi-add'],
        ],
        mini: true,
        inset: false,
        windowWidth: null,
        tab: 'tab-1'
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
.app-bar {
    box-shadow: 0 1px 0px -1px rgb(0 0 0 / 0%), 0 4px 5px 0 rgb(0 0 0 / 0%), 0 1px 10px 0 rgb(0 0 0 / 18%) !important;

    .v-image {
        width: 122px;
        height: 30px;
    }

    .v-icon, .v-toolbar__title {
        color: #fff !important;

    }
    .v-list-item {
        justify-content: flex-end;
    }

}

.side-bar {
    .v-list-item__icon {
        margin-right: 12px !important;
    }

    .v-list-group__header {
        .v-list-item__icon {
            color: grey;
        }
    }
}

.v-list-item__title{
    font-size: 14px !important;
    color: #000000 !important;
}

.overflow-hidden {
    .left-bar-title {
        .v-list-item__title,.v-icon {
            color: #000B2C !important;
            font-weight: 500;
        }
    }
}

.v-list-group {
    .v-list-group__header {
        &:active {
            color: #000B2C !important;
            background-color: #F6F9FD !important ;
            
        }
    }

    .menu-active-item {
        background-color: #F6F9FD;
        border-left: 3px solid #000B2C;
    }

}
</style>
