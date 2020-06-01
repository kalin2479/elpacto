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
                                    <h3>Cuéntanos más sobre tu empresa</h3>
                                    <p>Completa los campos y nos contactaremos contigo para saber si hacemos un pacto</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="6">
                                    <ValidationProvider tag="div" vid="nombre" rules="required|min:2" name="Nombre" v-slot="{ errors, validated }" >
                                        <b-form-group
                                            label="Nombre"
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
                                            label="Apellido"
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
                                            label="Email"
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
                                            label="Cargo"
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
                                    <ValidationProvider tag="div" vid="Nombre de tu empresa" rules="required|min:2" name="Nombre de tu empresa" v-slot="{ errors, validated }" >
                                        <b-form-group
                                            label="Nombre de tu empresa"
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
                                        <b-form-group label="Tipo de Negocio" >
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
                                    <ValidationProvider tag="div" vid="Rubro" rules="required" name="Rubro" v-slot="{ errors, validated }" >
                                        <b-form-group label="Rubro" >
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
                                            label="Inversión estimada por 3 meses en medios digitales (Dólares)" 
                                            description=""
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
                                    <ValidationProvider tag="div" vid="Rentabilidad" rules="required" name="Rentabilidad" v-slot="{ errors, validated }" >
                                        <b-form-group 
                                            label="Rentabilidad Anual Estimada"
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
                                    <ValidationProvider tag="div" vid="Presencia de Marca" rules="required" name="Presencia de Marca" v-slot="{ errors, validated }" >
                                        <b-form-group 
                                            label="Presencia de Marca"
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
                                    <b-form-group label="¿Tienes un sitio web?">
                                        <b-form-radio v-model="form.option_website" value="Yes">Sí</b-form-radio>
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
                                        Acepto recibir novedades sobre marketing y comunicaciones de Publicis Groupe Perú y  acepto el procesamiento de mis datos personales de acuerdo con nuestra Política de privacidad. Puede retirar su consentimiento en cualquier momento visitando nuestro Centro de preferencias.
                                        </b-form-checkbox>
                                    </ValidationProvider>
                                </b-col>
                            </b-row>
                            <b-row class="box-submit">
                                <b-col>
                                    <b-button type="submit" variant="danger" size="lg" id="btnSumit">Enviar</b-button>
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
                    <p class="text-legal">Esta oferta es válida solo para campañas de publicidad digital en Perú. No todas las empresas calificarán. Se aplica el gasto mínimo de marketing digital. Todas las métricas de rendimiento deben ser acordadas por el anunciante y Publicis Groupe. La garantía del Pacto, Desarrollado por Publicis Groupe Perú está sujetos evaluación y previo consentimiento de ambas partes.</p>
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
                business: [{ text: 'Por favor seleccione una opción', value: null }, 'B2C:Productos', 'B2C:Servicios', 'B2B: Productos', 'B2B: Servicios'],
                industries: [{ text: 'Por favor seleccione una opción', value: null }, 'Financiero', 'Salud', 'Entretenimiento', 'Consumo Masivo'],
                estimated: [{text: 'Por favor seleccione una opción', value: null}, 'Menos de 10K USD', 'Entre 10k – 50k USD', 'Entre 50k – 110k USD', 'Más de 110K USD'],
                annual: [{text: 'Por favor seleccione una opción', value: null}, '< $10M', '$10M - $50M', '$51M - $100M', '$101M - $250M', '$251M - $500M', '$501M - $750M', '$751M - $1B', '$1B +'],
                brand: [{text: 'Por favor seleccione una opción', value: null}, {text: 'Sólo Digital', value: 'Digital' }, {text: 'Sólo Medios Tradicionales (No Digital)', value: 'No Digital'}, {text: 'Todos los medios (Digitales y Tradicionales)', value: 'Todos los medios'}],
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