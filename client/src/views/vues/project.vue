<template>
    <div class="project">
        <div class="card" style="height: 600px;">
            <div class="row pt-5 justify-content-center">
                <h2><strong>{{content['name']}}</strong></h2>
            </div>
            <div class="row pb-5 justify-content-center">
                <h5><small>{{content['period']}}</small></h5>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img :src="require('@/assets/jujube.png')" height="70%">
                </div>
                <div class="col-md-6">
                    <div class="content-top">
                        {{content['content']}}
                    </div>
                    <div class="line pb-3 mb-5"></div>
                    <div class="content-bottom text-left">
                        <span style="font-size: 1.25rem;"><strong>요약</strong></span> <br>
                        <i class="mdi mdi-arrow-right-bottom-bold"></i><pre>기능    {{content['func']}}</pre> <br>
                        <i class="mdi mdi-arrow-right-bottom-bold"></i> Front: {{content['front']}} <br>
                        <i class="mdi mdi-arrow-right-bottom-bold"></i> Back: {{content['back']}} <br>
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
    name: 'Project'
}
</script>

<style>
    .line {
        border-bottom: 2px solid grey;
        opacity: 0.2;
    }

    i {
        font-size: 10px;
    }
</style>