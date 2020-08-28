// 在此处添加您的代码

//% weight=100  color=#e7660b icon="\uf083"  block="MPU6050"

namespace mpu6050{
const i2cAddr = 0x68;
    


    /**
     * I2C写一字节数据
     */
    function i2cWriteByet(reg:number, data:number):void{
        pins.i2cWriteRegister(((i2cAddr<<1)|0), reg, data);
    }

    /**
     * I2C连续写
     */
    function i2cReadByet(reg:number):number{
        pins.i2cWriteNumber(((i2cAddr<<1)|0), reg);
        return pins.i2cReadNumber(((i2cAddr<<1)|1), NumberFormat.Int8LE)
    }
}