<template>
    <div class="project">
        <div class="card pb-5 pl-5 pr-5 m-auto" style="min-height: 750px;">
            <div class="row pt-5 justify-content-center">
                <h2><strong>{{content['name']}}</strong></h2>
            </div>
            <div class="row pb-5 justify-content-center">
                <h5><small>{{content['period']}}</small></h5>
            </div>
            <div class="row">
                <div class="col-md-6 m-auto mb-3">
                    <div class="thumbnail mb-3">
                        <span v-if="!images.length">
                            <div class="spinner-border mb-5" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div>
                                이미지 로딩 중
                            </div>
                        </span>
                        <img v-else :src="images[currPage]" width="90%" style="border: 1px solid;">
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="mdi mdi-chevron-left" style="font-size: 30px;" @click="moveLeft"></i>
                        <strong><span class="h-100" style="font-size: 20px;">{{currPage + 1}} / {{content['albumLen']}}</span></strong>
                        <i class="mdi mdi-chevron-right" style="font-size: 30px;" @click="moveRight"></i>
                    </div>
                </div>
                <div class="col-md-6 pr-5">
                    <div class="content-top text-left">
                        <p v-html="content['content']" style="font-size: 20px; text-align: justify;"></p>
                    </div>
                    <div class="line pb-3 mb-3"></div>
                    <div class="content-bottom text-left ml-3 m-auto">
                        <span style="font-size: 1.5rem;">👇</span> <br><br>
                        <div class="row mb-2">
                            <div class="col-4">
                                <i class="mdi mdi-arrow-right-bottom-bold" style="font-size: 15px;">&nbsp;</i>
                                <span style="font-size: 20px;"><strong>Func</strong></span>
                            </div>
                            <div class="col-md-8 mt-auto">
                                {{content['func']}} <br>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <i class="mdi mdi-arrow-right-bottom-bold" style="font-size: 15px;">&nbsp;</i>
                                <span style="font-size: 20px;"><strong>Front</strong></span>
                            </div>
                            <div class="col-md-8 mt-auto">
                                {{content['front']}} <br>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <i class="mdi mdi-arrow-right-bottom-bold" style="font-size: 15px;">&nbsp;</i>
                                <span style="font-size: 20px;"><strong>Back</strong></span>
                            </div>
                            <div class="col-md-8 mt-auto">
                                {{content['back']}} <br>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-4">
                                <i class="mdi mdi-arrow-right-bottom-bold" style="font-size: 15px;">&nbsp;</i>
                                <span style="font-size: 20px;"><strong>Source</strong></span>
                            </div>
                            <div class="col-md-8 mt-auto">
                                <strong><a class="source-link" :href="content['github']">소스코드 보기</a></strong> <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            default: () => { return {} },
            type: Object
        }
    },
    name: 'Project',
    data() {
        return {
            images: [],
            currPage: 0,
        }
    },
    mounted() {
        this.getImages();
    },
    methods: {
        getImages() {
            let name = this.content['album'];

            for (let i=0;i<this.content['albumLen'];i++) this.images.push(require(`@/assets/proj/${name}/${name}_${i+1}.jpg`));
        },
        moveLeft() {
            if (this.currPage == 0) {
                this.currPage = this.images.length - 1;
                return;
            }
            this.currPage -= 1;
        },

        moveRight() {
            if (this.currPage == this.images.length - 1) {
                this.currPage = 0;
                return;
            }

            this.currPage += 1;
        },
    },
    watch: {
        content(newer, older) {
            this.images = [];
            this.currPage = 0;
            this.getImages();
        }
    }
}
</script>

<style>
    .line {
        border-bottom: 2px solid grey;
        opacity: 0.2;
    }
</style>