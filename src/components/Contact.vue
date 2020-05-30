<template>
    <div class="box-form" id="contactForm">
        <b-container>
            <b-row>
                <b-col cols="12" lg="9">
                    <message-form  v-if="!show" />
                    <ValidationObserver v-slot="{ handleSubmit }" ref="form">
                        <b-form @submit.prevent="handleSubmit(onSubmit)" v-if="show">
                            <b-row class="title-form">
                                <b-col cols="12" lg="6">
                                    <h3>To get started, tell us more about you</h3>
                                    <p>Fill out the form below and we'll let you know if The Pact is right for you.</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="nombre" rules="required|min:2" name="Nombre" v-slot="{ errors, validated }" >
                                        <b-form-group
                                            label="First name"
                                        >
                                            <b-form-input
                                                v-model="form.name"
                                                autocomplete="off"
                                                type="text"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                placeholder="Enter name"
                                            ></b-form-input>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>

                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="apellido" rules="required|min:2" name="Apellido" v-slot="{ errors, validated }" >
                                        <b-form-group
                                            label="Last name"
                                        >
                                            <b-form-input
                                                v-model="form.surname"
                                                autocomplete="off"
                                                type="text"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                placeholder="Enter last name"
                                            ></b-form-input>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors, validated}">
                                        <b-form-group
                                            label="Email address"
                                        >
                                            <b-form-input
                                                v-model="form.email"
                                                type="email"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                placeholder="Enter email"
                                            ></b-form-input>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="trabajo" rules="required|min:2" name="Trabajo" v-slot="{ errors , validated}" >
                                        <b-form-group
                                            label="Job title"
                                        >
                                            <b-form-input
                                                v-model="form.job"
                                                type="text"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                placeholder="Enter Job title"
                                            ></b-form-input>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            
                            <hr>

                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="compañia" rules="required|min:2" name="Compañia" v-slot="{ errors, validated }" >
                                        <b-form-group
                                            label="Company name"
                                        >
                                            <b-form-input
                                                v-model="form.company"
                                                type="text"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                placeholder="Enter Company name"
                                            ></b-form-input>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Tipo de negocios" rules="required" name="Tipo de negocios" v-slot="{ errors, validated }" >
                                        <b-form-group label="Business type" >
                                            <b-form-select
                                                v-model="form.select_business"
                                                :options="business"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            ></b-form-select>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Industria" rules="required" name="Industria" v-slot="{ errors, validated }" >
                                        <b-form-group label="Industry" >
                                            <b-form-select
                                                v-model="form.select_industry"
                                                :options="industries"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            ></b-form-select>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Estimado" rules="required" name="Estimado" v-slot="{ errors, validated }" >
                                        <b-form-group 
                                            label="Estimated 3-monyh digital media budget" 
                                            description=" At this time, the minimum is $75K over three months."
                                        >
                                            <b-form-select
                                                v-model="form.select_estimated"
                                                :options="estimated"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            ></b-form-select>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Anual" rules="required" name="Anual" v-slot="{ errors, validated }" >
                                        <b-form-group 
                                            label="Annual revenue"
                                        >
                                            <b-form-select
                                                v-model="form.select_annual"
                                                :options="annual"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            ></b-form-select>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Brand" rules="required" name="Brand" v-slot="{ errors, validated }" >
                                        <b-form-group 
                                            label="Brand Presence"
                                        >
                                            <b-form-select
                                                v-model="form.select_brand"
                                                :options="brand"
                                                autocomplete="off"
                                                :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                            ></b-form-select>
                                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <b-form-group label="Do you have resources for website tagging">
                                        <b-form-radio v-model="form.option_website" value="Yes">Yes</b-form-radio>
                                        <b-form-radio v-model="form.option_website" value="No">No</b-form-radio>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="Terminos y condiciones" rules="required" name="Terminos y condiciones" v-slot="{ errors, validated }" >
                                        <b-form-checkbox
                                            v-model="form.chek_term"
                                            value="accepted"
                                            unchecked-value="not_accepted"
                                            :state = "(form.chek_term === 'accepted') ? true : ( ( !validated ) ? null : false) "
                                        > 
                                        By submitting this form, you agree to receive marketing communications from Epsilon and its affiliated companies, and agree to the processing of your personal data in accordance with our Privacy Policy. You may withdraw your consent at any time by visiting our Preference Center.
                                        </b-form-checkbox>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row class="box-submit">
                                <b-col>
                                    <b-button type="submit" variant="danger" size="lg" id="btnSumit">Submit</b-button>
                                </b-col>
                            </b-row>                        
                        </b-form>
                    </ValidationObserver>
                    <!-- <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                    </b-card> -->
                </b-col>
            </b-row>
            <b-row class="box-legal">
                <b-col cols="12" lg="9">
                    <hr>
                    <p class="text-legal">This offer is valid only for United States digital advertising campaigns. Not all businesses will qualify. Minimum digital marketing spend applies. All performance metrics must be agreed upon by advertiser and Epsilon. The Pact, Powered by Epsilon guarantee is subject to full terms and conditions in a written contract with Epsilon. For consideration or for more information, please contact us by July 31, 2020.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>

    import Message from './Message.vue'
    import $ from 'jquery'

    export default {
        components: {
            MessageForm: Message
        },
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    surname: '',
                    company: '',
                    select_business: null,
                    select_industry: null,
                    select_estimated: null,
                    select_annual: null,
                    select_brand: null,
                    option_website: null,
                    job: '',
                    chek_term: 'not_accepted'
                },        
                business: [{ text: 'Please select an option', value: null }, 'B2C: Product', 'B2C: Service', 'B2B: Product', 'B2B: Service'],
                industries: [{ text: 'Please select an option', value: null }, 'Financial Services', 'Grocery', 'Health', 'Media & Entertainment'],
                estimated: [{text: 'Please select an option', value: null}, '$75K - $180K', '$180K - $600K', '$601k +'],
                annual: [{text: 'Please select an option', value: null}, '< $10M', '$10M - $50M', '$51M - $100M', '$101M - $250M', '$251M - $500M', '$501M - $750M', '$751M - $1B', '$1B +'],
                brand: [{text: 'Please select an option', value: null}, {text: 'Online (or large share of sales online)', value: 'Online' }, {text: 'Offline (or small online share of sales)', value: 'Offline'}, {text: 'Online and Offline (equal amount of online and offline sales)', value: 'Online and Offline'}],
                show: true
            }
        },
        methods: {
            resetFormFields() {
                this.form.email = '' 
                this.form.name = '' 
                this.form.surname = '' 
                this.form.company = '' 
                this.form.job = '' 
                this.form.chek_term = 'not_accepted' 
                this.form.select_business = null
                this.form.select_industry = null
                this.form.select_estimated = null
                this.form.select_annual = null
                this.form.select_brand = null
                this.form.option_website = null 
            },
            async onSubmit() {
                let _this = this
                if ( this.form.chek_term === 'not_accepted' ) {
                    return false
                }
                $('#btnSumit').addClass('disabled')
                $('#btnSumit').attr('disabled',true)
                try {
                    await this.axios({
                        method: 'POST',
                        url: 'https://elpacto.pe/formAxios/',
                        data: this.form
                    })
                    .then( function (response) {
                        // resivimos una respuesta
                        _this.show = false
                    })
                } catch (error) {
                    console.log(error)
                } finally {
                    this.$refs.form.reset()
                    this.resetFormFields()
                }
            }
        }
    }
</script>
<style lang="sass">
    .box-form
        padding: 2.5rem 0 1.5rem
        @media (min-width: 992px)
            padding: 3.5rem 0 1.5rem
        
        .box-submit
            padding-top: 2rem
            .btn-lg
                padding: 0.5rem 2.5rem
                display: block
                width: 100%
                @media (min-width: 992px)
                    display: inline-block
                    width: auto
        hr
            padding-bottom: 1rem
        .title-form
            padding-bottom: 1.25rem
        .col-form-label
            font-family: 'Lato'
            font-weight: 700
            font-size: 1em
        h3
            font-family: 'Lato'
            font-weight: 700
            font-size: 2em
        p
            font-family: 'Lato'
            font-weight: 400
            font-size: 1.23em
            padding-right: 5.5rem
            line-height: 1.75rem
            &.text-legal
                font-size: 0.72em
                color: #757575
                font-weight: 300
                line-height: 1rem
                padding-right: 0
        .box-legal
            padding-top: 1.5rem
</style>  