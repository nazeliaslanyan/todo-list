<template>
    <div class="pa-4 text-center">
        <v-dialog :modelValue="isOpen" @update:modelValue="onClose" max-width="600">
            <v-card :title="modalTitle">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" sm="12">
                            <v-text-field :class="{ invalid: !isTitleValid }" label="Title*" required v-model="title"
                                ref="title"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-textarea label="Description" v-model="description"></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="12">
                            Due date
                            <datepicker v-model="dueDate" />
                        </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="warning" text="Close" variant="elevated" @click="onClose"></v-btn>
                    <v-btn :disabled="!isTitleValid" color="success" text="Save" variant="elevated"
                        @click="onSave"></v-btn>


                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style>
.invalid .v-input__control {
    border: 1px solid red;
}
</style>

<script src="./taskModal.js"></script>
