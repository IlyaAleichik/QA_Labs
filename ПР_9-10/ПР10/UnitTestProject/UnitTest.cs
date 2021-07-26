using System;
using TestApp.Classes;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject
{
    [TestClass]
    public class UnitTest
    {
      
        [TestMethod]
        public void SredneeReturnAndGeneralDiagonal()
        {
            //arrange
            int expected = 5;
            //act
            var quad = new QuadMatrix(Matrix5to5, 5);

            int actual = quad.SredneeElementMatrix();
            //assert
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void Zamena()
        {
            //arrange
            int expected = 3;
            //act
            var quad = new QuadMatrix(Matrix5to5, 5);

            int actual = quad.LocationSrendee();

            //assert
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void SetMatrix(){


            int[,] tsetmtrx = null;
            int expected_prdk = 5;
            var quad = new QuadMatrix(tsetmtrx,0);
            quad.SetMatrix(Matrix5to5, 5);
            int actualprdk = quad._prdk;
            Assert.AreEqual(expected_prdk, actualprdk);
          
        }




        public int[,] Matrix5to5
        {
            get
            {
                int[,] matr = {
                                 {0, 1, 3, 6, 9},
                                 {5, 0, 3, 1, 9},
                                 {8, 3, 5, 0, 1},
                                 {20, 1, 0, 30, 9},
                                 {4, 1, 3, 9, 5}
                                };
                return matr;
            }
        }
    }
}
