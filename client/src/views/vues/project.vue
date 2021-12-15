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
                    
                </div>
                <div class="col-md-6">
                    <div class="content-top">
                        {{content['content']}}
                    </div>
                    <div class="line pb-3"></div>
                    <div class="content-bottom">
                        <i class="mdi mdi-arrow-right-bottom-bold"></i> 기능: {{content['func']}} <br>
                        <i class="mdi mdi-arrow-right-bottom-bold"></i> Front: {{content['front']}} <br>
                        <i class="mdi mdi-arrow-right-bottom-bold"></i> Back: {{content['front']}} <br>
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

    .mdi {
        font-size: 20px;
    }
</style>